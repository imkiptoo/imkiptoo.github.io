import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: "#0940ce",
				"primary-dark": "#ffc06e",
			},
		}
	},

	plugins: [typography]
} satisfies Config;
