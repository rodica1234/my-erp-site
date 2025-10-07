// docusaurus.config.js
module.exports = {
  title: 'ERP Docs', // titlul site-ului
  tagline: 'Manual ERP multilingv',
  url: 'http://localhost:3001', // URL-ul site-ului, pentru dev poate fi localhost
  baseUrl: '/', // root path al site-ului
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // GitHub org/user
  projectName: 'my-erp-docs',   // Repo
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
  routeBasePath: 'docs', // <--- adaugă 'docs'
  sidebarPath: require.resolve('./sidebars.js'),
  showLastUpdateTime: false,
},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
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
          /*activeBasePath: 'docs',*/
          label: 'Faq',
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
