import { writable } from 'svelte/store';

// Initialize the theme store
const theme = writable('light'); // Default to 'light'

// Check if running in the browser
if (typeof window !== 'undefined') {
	const userTheme = localStorage.getItem('theme');
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	// Set the theme to the saved value or system preference
	theme.set(userTheme || systemTheme);

	theme.subscribe((value) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', value);

			// Apply the theme
			document.documentElement.classList.remove('dark', 'light');
			if (value === 'device') {
				const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				document.documentElement.classList.add(systemPrefersDark ? 'dark' : 'light');
			} else {
				document.documentElement.classList.add(value);
			}
		}
	});
}

export { theme };