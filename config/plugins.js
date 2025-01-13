module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  navigation: {
    enabled: true,
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
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // "vercel-deploy": {
  //   enabled: true,
  //   config: {
  //     deployHook:
  //       "https://api.vercel.com/v1/integrations/deploy/prj_1UUEFfN0exyJBASkZ7DARC0srVMR/D1ArjGVKrP",
  //     apiToken: env("VERCEL_API_TOKEN"),
  //     appFilter: "baukustik",
  //     teamFilter: "your-team-id-on-vercel",
  //     roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
  //   },
  // },
  backup: {
    enabled: true,
    config: {
      cronSchedule: "0 6 * * *", // At 6 AM
      storageService: "aws-s3",
      awsAccessKeyId: env("AWS_ACCESS_KEY_ID"),
      awsSecretAccessKey: env("AWS_ACCESS_SECRET"),
      awsRegion: env("AWS_REGION"),
      awsS3Bucket: "baukustik-backup",
      databaseDriver: "postgres",
      databaseUrl: env("DATABASE_URL"),
      pgDumpExecutable: env("PG_DUMP_EXECUTABLE", "pg_dump"), // Use default if not defined
      allowCleanup: true,
      timeToKeepBackupsInSeconds: 172800, // 2 days
      cleanupCronSchedule: "0 7 * * *", // Each day at 07:00 AM
      errorHandler: (error, strapi) => {
        console.log(error);
      },
    },
  },
});
