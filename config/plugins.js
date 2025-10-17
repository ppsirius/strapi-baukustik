module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  navigation: {
    enabled: true,
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          published: {
            url: env("PREVIEW_DOMAIN"),
          },
        },
        {
          uid: 'api::realization.realization',
          published: {
            url: env("PREVIEW_DOMAIN"),
          },
        },
      ],
    },
  },
  'preview-helper': {
    enabled: true,
    resolve: './src/plugins/preview-helper',
  },
  translate: {
    enabled: false,
    config: {
      provider: 'deepl',
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: '1cc8a6c6-3316-4200-a599-0114d1a0af49:fx',
        // use custom api url - optional
        apiUrl: 'https://api-free.deepl.com',
        // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
        localeMap: {
          // use uppercase here!
          PL: 'PL',
        },
        // Optional: Pass glossaries on translation. The correct glossary for each translation is selected by the target_lang and source_lang properties
        glossaries: [
          {
            id: "glossary",
            target_lang: "EN",
            source_lang: "PL",
          }
        ],
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode and glossary cannot be set this way.
          // use with caution, as non-default values may break translation of markdown
          formality: 'default',
          // ...
        },
      },

      // Which field types are translated (default string, text, richtext, components and dynamiczones)
      // Either string or object with type and format
      // Possible formats: plain, markdown, html, jsonb (default plain)
      translatedFieldTypes: [
        'string',
        { type: 'blocks', format: 'jsonb' },
        { type: 'text', format: 'plain' },
        { type: 'richtext', format: 'markdown' },
        'component',
        'dynamiczone',
      ],

      // If relations should be translated (default true)

      translateRelations: true,
      // ignore updates for certain content types (default [], i.e. no content types are ignored)
      ignoreUpdatedContentTypes: ['api::category.category'],
      // wether to regenerate uids when batch updating (default false)
      regenerateUids: true
    },

  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          baseUrl: `https://s3.${env('AWS_REGION')}.amazonaws.com/${env('AWS_BUCKET')}`,
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
    },
  },
});
