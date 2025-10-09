// docusaurus.config.js

module.exports = {
  title: 'ERP Docs',
  tagline: 'Manual ERP multilingv',
  url: 'https://rodica1234.github.io',
  baseUrl: '/my-erp-site/',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'rodica1234',
  projectName: 'my-erp-site',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'fr', 'ro'],
    localeConfigs: {
      it: { label: 'Italiano' },
      en: { label: 'English' },
      fr: { label: 'Français' },
      ro: { label: 'Română' },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // 🔌 Aici adăugăm pluginul personalizat
  plugins: [
    require.resolve('./src/plugins/docusaurus-plugin-schema'),
  ],

  themeConfig: {
    prism: {
      additionalLanguages: ['csharp'],
    },
    navbar: {
      title: 'academy',
      logo: { alt: 'ERP Logo', src: 'img/logo.png' },
      items: [
        {
          to: 'docs/faq',
          label: 'Faq',
          position: 'right',
        },
        {
          to: 'docs/ai-friendly',
          label: 'AI friendly',
          position: 'right',
        },
        {
          label: 'Aree',
          position: 'left',
          items: [
            {
              to: 'docs/modules/accounting',
              activeBasePath: 'docs',
              label: 'Contabilità',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
};
