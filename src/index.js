'use strict';

const { performance } = require('node:perf_hooks');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  async bootstrap({ strapi }) {
    try {
      // Programmatically create/update the GitHub webhook on bootstrap
      const setUpGithubWebhook = require('./util/set-up-github-webhook');
      await setUpGithubWebhook(strapi);
    } catch (err) {
      strapi.log.error('Failed to set up GitHub webhook:', err);
    }
  }
  // ping db check
  // async bootstrap({ strapi }) {
  //   const knex = strapi.db.connection;
  //   const ping = async () => {
  //     const startedAt = performance.now();
  //     try {
  //       await knex.raw('select 1');
  //       const duration = performance.now() - startedAt;
  //       strapi.log.info(`[db ping] select 1 in ${duration.toFixed(1)} ms`);
  //     } catch (error) {
  //       const duration = performance.now() - startedAt;
  //       strapi.log.error(`[db ping] failed after ${duration.toFixed(1)} ms: ${error.message}`);
  //     }
  //   };

  //   await ping();

  //   const intervalMs = Number(process.env.DB_PING_INTERVAL_MS || 60000);
  //   if (intervalMs > 0) {
  //     const timer = setInterval(() => {
  //       ping().catch((error) => {
  //         strapi.log.error(`[db ping] unexpected error: ${error.message}`);
  //       });
  //     }, intervalMs);

  //     if (typeof timer.unref === 'function') {
  //       timer.unref();
  //     }
  //   }
  // },
};
