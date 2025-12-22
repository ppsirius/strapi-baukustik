const { CONFIG } = require('../config');

const getGithubAuth = () => `Bearer ${CONFIG.GITHUB.TOKEN}`;

const name = 'GitHub Action';

module.exports = async (strapi) => {
  const webhookStore =
    'webhookStore' in strapi ? strapi.webhookStore : await strapi.get('webhookStore');

  try {
    const webhooks = await webhookStore.findWebhooks();
    const oldWebhook = webhooks.find((webhook) => webhook.name === name);
    if (oldWebhook) {
      await webhookStore.deleteWebhook(oldWebhook.id);
      strapi.log.info(`${name} webhook deleted.`);
    }
  } catch (error) {
    strapi.log.error(`Unable to prepare "${name}" webhook`, error);
  }

  try {
    await webhookStore.createWebhook({
      id: "",
      events: [
        "entry.create",
        "entry.update",
        "entry.delete",
        "entry.publish",
        "entry.unpublish",
      ],
      headers: {
        "x-authorization": getGithubAuth(),
        "Content-Type": "application/json",
      },
      isEnabled: true,
      name,
      url: `http://localhost:${CONFIG.PORT}/api/github?event_type=${CONFIG.GITHUB.EVENT_TYPE}`,
    });
    strapi.log.info(`${name} webhook created with events: entry.*, media.*`);
  } catch (error) {
    strapi.log.error(`Unable to create "${name}" webhook`, error);
  }
};
