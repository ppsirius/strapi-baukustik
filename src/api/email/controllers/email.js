"use strict";

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
});

module.exports = {
  async send(ctx) {
    const { text } = ctx.request.body;
    console.log(ctx.request.body);
    const to = "ppsirius@gmail.com";
    const from = "Contact form <ppsirius@gmail.com>";

    const params = {
      Source: from,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: "🥳 Contact form from Baukustik page.",
        },
        Body: {
          Text: {
            Data: text,
          },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      const response = await sesClient.send(command);
      ctx.send({
        message: "Email sent successfully",
        messageId: response.MessageId,
      });
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
};
