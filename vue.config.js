process.env.VUE_APP_VERSION = require('./package.json').version;
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
