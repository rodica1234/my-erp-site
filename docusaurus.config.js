// docusaurus.config.js
module.exports = {
  title: 'ERP Docs', // titlul site-ului
  tagline: 'Manual ERP multilingv',
  url: 'https://rodica1234.github.io', // URL-ul site-ului, pentru dev poate fi localhost
  baseUrl: '/my-erp-site/', // root path al site-ului
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'rodica1234', // GitHub org/user
  projectName: 'my-erp-site',   // Repo
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
