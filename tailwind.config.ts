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
				"light-border": "#e5e5e5",
				"dark-border": "#262626",
				"dark-bg": "#0e1113",
			},
		}
	},

	plugins: [typography]
} satisfies Config;
