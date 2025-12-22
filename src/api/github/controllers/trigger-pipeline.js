const { CONFIG } = require('../../../config');

// Configuration
const DEBOUNCE_MS = Number(process.env.GITHUB_DEBOUNCE_MS || 20000);
const GITHUB_API_VERSION = 'application/vnd.github.v3+json';



/**
 * Build GitHub authorization header
 */
const getAuthHeader = () => `Bearer ${CONFIG.GITHUB.TOKEN}`;

/**
 * Extract owner and repo from GitHub API URL
 * @param {string} url - GitHub API URL (e.g., https://api.github.com/repos/owner/repo)
 * @returns {{owner: string, repo: string} | null}
 */
const parseOwnerRepo = (url) => {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    const repoIndex = parts.indexOf('repos');
    if (repoIndex >= 0 && parts.length >= repoIndex + 3) {
      return {
        owner: parts[repoIndex + 1],
        repo: parts[repoIndex + 2],
      };
    }
  } catch (err) {
    console.error('Failed to parse GitHub URL:', err.message);
  }
  return null;
};

/**
 * Cancel all queued/in-progress workflow runs to avoid wasted builds
 */
const cancelPreviousBuilds = async () => {
  const ownerRepo = parseOwnerRepo(CONFIG.GITHUB.URL);
  if (!ownerRepo) {
    console.warn('Unable to parse owner/repo from GITHUB_URL');
    return;
  }

  const { owner, repo } = ownerRepo;
  const listUrl = `https://api.github.com/repos/${owner}/${repo}/actions/runs?event=repository_dispatch&per_page=100`;
  const headers = {
    Accept: GITHUB_API_VERSION,
    Authorization: getAuthHeader(),
  };

  try {
    const response = await fetch(listUrl, { headers });
    if (!response.ok) {
      console.warn(`Failed to list workflow runs: ${response.status}`);
      return;
    }

    const { workflow_runs = [] } = await response.json();
    const cancelableRuns = workflow_runs.filter((run) =>
      ['queued', 'in_progress'].includes(run.status)
    );

    if (cancelableRuns.length > 0) {
      console.info(`Canceling ${cancelableRuns.length} previous workflow run(s)`);

      // Cancel all in parallel (best-effort, don't block on failures)
      await Promise.allSettled(
        cancelableRuns.map((run) =>
          fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs/${run.id}/cancel`, {
            method: 'POST',
            headers,
          })
        )
      );
    }
  } catch (err) {
    console.error('Error canceling previous builds:', err.message);
  }
};

/**
 * Dispatch repository_dispatch event to GitHub
 * @param {object} payload - Dispatch payload with event_type and optional client_payload
 */
const dispatchToGitHub = async (payload) => {
  try {
    await cancelPreviousBuilds();

    const response = await fetch(`${CONFIG.GITHUB.URL}/dispatches`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.everest-preview+json',
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.info(`✓ GitHub dispatch successful (${response.status})`);
    } else {
      console.error(`✗ GitHub dispatch failed: ${response.status} ${response.statusText}`);
    }

    return response;
  } catch (err) {
    console.error('✗ Dispatch request failed:', err.message);
    throw err;
  }
};



module.exports = {
  async post(ctx, next) {
    // Validate authorization
    const auth = ctx.request.headers["x-authorization"];
    if (auth !== getAuthHeader()) {
      ctx.response.status = 403;
      ctx.body = { error: "Forbidden" };
      return next();
    }

    // Extract and validate event_type
    const requestUrl = ctx.request.url || "";
    const queryString = requestUrl.split("?")[1] || "";
    const requestParams = new URLSearchParams(queryString);
    const eventType = requestParams.get("event_type");

    if (!eventType || eventType !== CONFIG.GITHUB.EVENT_TYPE) {
      ctx.response.status = 400;
      ctx.body = { error: "Invalid or missing event_type" };
      return next();
    }

    // Build dispatch payload
    const payload = { event_type: eventType };

    // Include client_payload if request body is provided
    if (ctx.request.body && Object.keys(ctx.request.body).length > 0) {
      payload.client_payload = ctx.request.body;
    }

    // Immediately dispatch to GitHub (no debounce)
    dispatchToGitHub(payload);

    // Return immediate response
    ctx.response.status = 202;
    ctx.body = {
      message: "Dispatch scheduled",
      event_type: eventType,
      debounce_ms: DEBOUNCE_MS,
    };

    return next();
  },
};