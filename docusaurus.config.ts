import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Papelería Cartagena',
  tagline: 'Documentación y manuales de la plataforma B2B',
  favicon: 'img/logo-cartagena.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://oblicuaDev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/papeleriacartagena-docs/',

  // GitHub Pages deployment config.
  organizationName: 'oblicuaDev',
  projectName: 'papeleriacartagena-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-cartagena.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Papelería Cartagena',
      logo: {
        alt: 'Papelería Cartagena',
        src: 'img/logo-cartagena.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual de Administración',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Manual de Administración',
              to: '/docs/manual-administracion/introduccion-alcance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Papelería Cartagena. Todos los derechos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
