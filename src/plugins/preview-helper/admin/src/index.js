import pluginPkg from '../../package.json';
import pluginId from './pluginId';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // Register the preview button hook
    app.registerHook('plugin/preview-button/before-build-url', ({ data, draft, published, uid }) => {
      console.log('Preview button hook called for:', uid, data);

      const locale = data.locale || 'pl';
      const isEnglish = locale === 'en';
      const localePrefix = isEnglish ? '/en' : '';

      const pathParts = [
        data.category || '',
        data.subCategory || '',
        data.slug || ''
      ].filter(Boolean);

      const pathString = pathParts.join('/');

      const newDraft = draft ? {
        ...draft,
        query: {
          ...draft.query,
          slug: pathString,
          locale: locale,
        },
      } : null;

      const newPublished = published ? {
        ...published,
        url: `http://localhost:4321${localePrefix}${pathString ? '/' + pathString : ''}`
      } : null;

      console.log('Generated URLs:', {
        draft: newDraft?.url,
        published: newPublished?.url
      });

      return { draft: newDraft, published: newPublished };
    });

    app.registerPlugin({
      id: pluginId,
      name,
    });
  },

  bootstrap(app) { },
};
