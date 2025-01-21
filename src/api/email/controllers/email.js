"use strict";

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const createEmailBody = (
  formName,
  formCompany,
  formPhone,
  formEmail,
  formMessage
) => `
New contact form from baukustik.com

Name: ${formName}
Company: ${formCompany}
Phone: ${formPhone}
Email: ${formEmail}

Message:
${formMessage}
`;

const sesClient = new SESClient({
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
  },
});

module.exports = {
  async send(ctx) {
    // Validate required fields
    const requiredFields = ['formName', 'formCompany', 'formPhone', 'formEmail', 'formMessage'];
    const missingFields = requiredFields.filter(field => !ctx.request.body[field]);

    if (missingFields.length > 0) {
      ctx.status = 400;
      return ctx.send({
        status: 'error',
        code: 'VALIDATION_ERROR',
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    const { formName, formCompany, formPhone, formEmail, formMessage } = ctx.request.body;
    console.log('Valid email request received');
    const to = process.env.CONTACT_EMAIL_TO;
    const from = `Contact form <${process.env.CONTACT_EMAIL_FROM}>`;

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
          Data: "✉️ Contact form from Baukustik page.",
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

      ctx.status = 200;
      ctx.send({
        code: 'EMAIL_SENT',
        message: 'Email sent successfully',
        messageId: response.MessageId,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Email send failed:', error);

      const statusCode = error.name === 'TimeoutError' ? 504
        : error.$metadata?.httpStatusCode === 429 ? 429
          : 500;

      ctx.status = statusCode;
      ctx.send({
        code: error.name || 'EMAIL_SEND_FAILED',
        message: 'Failed to send email',
        details: statusCode === 429 ? 'Too many requests' : error.message,
        timestamp: new Date().toISOString()
      });
    }
  },
};
