// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import starlight from '@astrojs/starlight';
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
//
export default defineConfig({
  output: 'static',
  site: 'https://docs.iw4x.io',

  image: {
    service: sharpImageService({ limitInputPixels: false }),
  },

  integrations: [
    starlight({
      title: 'IW4x Docs',
      favicon: '/favicon.svg',
      defaultLocale: 'root',

      // Internationalization
      //
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },

      // Styling
      //
      customCss: ['./src/styles/custom.css'],

      // Navigation
      //
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Quickstart',
              link: '/get-started/quickstart/'
            },
            {
              label: 'Manual Installation',
              items: [
                {
                  label: 'On Windows',
                  link: '/get-started/manual-install/windows-guide/'
                },
                {
                  label: 'On Linux',
                  link: '/get-started/manual-install/linux-guide/'
                },
                {
                  label: 'On MacOS',
                  link: '/get-started/manual-install/macos-guide/'
                },
              ],
            },
          ],
        },
      ],

      // Git integration
      //
      editLink: {
        baseUrl: 'https://github.com/iw4x/docs/edit/main/',
      },

      // Social links
      //
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/iw4x',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.com/invite/pV2qJscTXf',
        },
        {
          icon: 'twitter',
          label: 'Twitter',
          href: 'https://x.com/IW4x_dev',
        },
      ],

      // Plugins
      //
      plugins: [
        starlightAutoDrafts(),
        starlightImageZoom(),
        starlightLinksValidator(),
      ],
    }),
  ],

  // Development server configuration
  //
  vite: {
    server: {
      allowedHosts: ['docs.iw4x.io'],
    },
  },
});
