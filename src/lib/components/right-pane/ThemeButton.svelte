<script>
	import Icon from '@iconify/svelte';
	import { theme } from '../../../stores/theme.js';

	export let title;
	export let icon;
	export let themeName;

	let currentTheme = '';

	// Subscribe only on the client
	if (typeof window !== 'undefined') {
		theme.subscribe((value) => (currentTheme = value));
	}

	function setTheme(newTheme = '') {
		theme.set(newTheme);
	}
</script>

<button class="btn {currentTheme === themeName ? 'active' : ''}" title="{title}" on:click={() => setTheme(themeName)}>
	<Icon icon="{icon}" height="20" />
</button>