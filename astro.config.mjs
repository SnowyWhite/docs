// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
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
			customCss: [ './src/styles/custom.css' ],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/iw4x/docs'
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
			sidebar: [
				{ label: 'Getting Started', autogenerate: { directory: 'install' } }
			],
      plugins: [
        starlightLinksValidator()
      ],
		}),
	],

	vite: {
		server: {
			allowedHosts: [ 'docs.iw4x.io' ]
		}
	}
});
