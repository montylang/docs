module.exports = {
  title: 'Monty',
  tagline: 'Functional programming for python developers',
  url: 'https://montylang.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'montylang', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Monty',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/montylang/monty',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      //style: 'dark',
      //links: [
      //  {
      //    title: 'Docs',
      //    items: [
      //      {
      //        label: 'Style Guide',
      //        to: 'docs/',
      //      },
      //      {
      //        label: 'Second Doc',
      //        to: 'docs/doc2/',
      //      },
      //    ],
      //  },
      //  {
      //    title: 'Community',
      //    items: [
      //      {
      //        label: 'Stack Overflow',
      //        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //      },
      //      {
      //        label: 'Discord',
      //        href: 'https://discordapp.com/invite/docusaurus',
      //      },
      //      {
      //        label: 'Twitter',
      //        href: 'https://twitter.com/docusaurus',
      //      },
      //    ],
      //  },
      //  {
      //    title: 'More',
      //    items: [
      //      {
      //        label: 'Blog',
      //        to: 'blog',
      //      },
      //      {
      //        label: 'GitHub',
      //        href: 'https://github.com/facebook/docusaurus',
      //      },
      //    ],
      //  },
      //],
      copyright: `Copyright © ${new Date().getFullYear()} Monty Lang`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/montylang/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/montylang/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
