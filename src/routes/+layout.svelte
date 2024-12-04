<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import { overlayScrollbarOptions } from '$lib/scrollOptionsStore.js';
	import Configurations from '$lib/components/right-pane/Configurations.svelte';
	import Links from '$lib/components/right-pane/Links.svelte';
	import Credits from '$lib/components/right-pane/Credits.svelte';
	import LeftSideNavigation from '$lib/components/nav/LeftSideNavigation.svelte';
	import { theme } from '../stores/theme';

	let { children } = $props();

	if (typeof window !== 'undefined') {
		const userTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		theme.set(userTheme || (systemPrefersDark ? 'dark' : 'light'));

		// Subscribe only on the client
		if (typeof window !== 'undefined') {
			theme.subscribe((value) => {
				let valueToUse = value;
				if (valueToUse === 'device') {
					valueToUse = systemPrefersDark ? 'dark' : 'light';
				}
				$overlayScrollbarOptions.scrollbars.theme = valueToUse === 'light' ? 'os-theme-dark' : 'os-theme-light';
			});
		}
	}
</script>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex h-full mx-40 overflow-hidden">
		<LeftSideNavigation/>
		<OverlayScrollbarsComponent
			class="flex-1 px-4 flex-grow overflow-auto"
			options={$overlayScrollbarOptions}
			defer
		>
			<div>
				{@render children()}
			</div>
		</OverlayScrollbarsComponent>
		<OverlayScrollbarsComponent
			class="h-full w-80 px-4 border-l border-l-light-border dark:border-l-dark-border flex flex-col justify-between"
			options={$overlayScrollbarOptions}
			defer
		>
			<div class="flex h-full flex-col">
				<div class="flex flex-col flex-grow flex-1 space-y-4 divide-y divide-light-border dark:divide-dark-border">
					<Links />
					<Configurations />
				</div>
				<Credits />
			</div>
		</OverlayScrollbarsComponent>
	</div>
</div>
