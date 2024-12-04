// vite.config.js
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',  // Optional: For better compatibility across modern browsers
		outDir: 'build',  // Output directory for the static site (default is "build")
	},
});
