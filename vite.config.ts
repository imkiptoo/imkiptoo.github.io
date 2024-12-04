// vite.config.js
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [sveltekit(),
		SvelteKitPWA({
			srcDir: 'src',
			outDir: '.svelte-kit/output/client',
			strategies: 'generateSW', // or 'generateSW'
			includeAssets: ['favicon.png', 'robots.txt'], // Any additional static files
			manifest: {
				name: 'Isaac Kiptoo Mulwa - Portfolio',
				short_name: 'Isaac Portfolio',
				description: 'Portfolio showcasing the work of Isaac Kiptoo Mulwa, a software engineer and advocate.',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				background_color: '#fafafa',
				theme_color: '#000000',
			}
		})
	],
	build: {
		target: 'esnext',  // Optional: For better compatibility across modern browsers
		outDir: 'build',  // Output directory for the static site (default is "build")
	},
});
