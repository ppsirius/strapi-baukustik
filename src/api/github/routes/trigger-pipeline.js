module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/github',
      handler: 'trigger-pipeline.post',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
