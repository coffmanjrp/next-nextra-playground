const withNextra = require('nextra')({
  // theme: 'nextra-theme-docs-mine',
  // theme: 'nextra-theme-mui-docs',
  theme: 'nextra-theme-docs',
  // theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_stork: true,
  unstable_staticImage: true,
});
module.exports = withNextra();
