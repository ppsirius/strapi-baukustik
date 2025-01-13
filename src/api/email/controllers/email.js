"use strict";

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const createEmailBody = (
  formName,
  formCompany,
  formPhone,
  formEmail,
  formMessage
) => `
New Contact Form Submission

Name: ${formName}
Company: ${formCompany}
Phone: ${formPhone}
Email: ${formEmail}

Message:
${formMessage}
`;

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
});

module.exports = {
  async send(ctx) {
    console.log("Params:", ctx.request.body);
    const { formName, formCompany, formPhone, formEmail, formMessage } =
      ctx.request.body;

    const to = process.env.CONTACT_EMAIL_TO;
    const from = "Contact form <info@baukustik.com>";

    const emailBody = createEmailBody(
      formName,
      formCompany,
      formPhone,
      formEmail,
      formMessage
    );

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
            Data: emailBody,
          },
          Html: {
            Data: `<html><body><pre>${emailBody}</pre></body></html>`, // Simple HTML version
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
