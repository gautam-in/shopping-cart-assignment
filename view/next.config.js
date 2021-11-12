const path = require('path');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-IN"],
    defaultLocale: "en-IN",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}


