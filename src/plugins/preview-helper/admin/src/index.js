import pluginPkg from '../../package.json';
import pluginId from './pluginId';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerHook('plugin/preview-button/before-build-url', ({ data, draft, published }) => {
      const locale = data.locale || 'pl';
      const isEnglish = locale === 'en';
      const localePrefix = isEnglish ? '/en' : '';

      // Detect content type: realizations only have slug, pages have category/subcategory
      const isRealization = !data.category && !data.subCategory && data.slug;

      // Build the appropriate path based on content type
      let path;
      if (isRealization) {
        // Realization URLs: /realizacje/{slug} (pl) or /en/realizations/{slug} (en)
        const realizationPath = isEnglish ? 'realizations' : 'realizacje';
        path = `${localePrefix}/${realizationPath}/${data.slug}`;
      } else {
        // Page URLs: /{category}/{subcategory}/{slug} (pl) or /en/{category}/{subcategory}/{slug} (en)
        const pathParts = [data.category, data.subCategory, data.slug].filter(Boolean);
        const pathString = pathParts.join('/');
        path = `${localePrefix}/${pathString}`;
      }

      // Use the base URL from the published config (comes from plugins.js env("PREVIEW_DOMAIN"))
      const baseUrl = published?.url || 'https://baukustik.com';

      return {
        draft: null,
        published: {
          ...published,
          url: `${baseUrl}${path}`,
        },
      };
    });

    app.registerPlugin({
      id: pluginId,
      name,
    });
  },

  bootstrap() { },
};
