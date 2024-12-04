<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import { overlayScrollbarOptions } from '$lib/scrollOptionsStore.js';
	import { theme } from '../stores/theme';
	import LeftSideNavigation from '$lib/components/nav/LeftSideNavigation.svelte';
	import RightSideNavigation from '$lib/components/right-pane/RightSideNavigation.svelte';
	import Icon from '@iconify/svelte';

	let { children } = $props();
	let isLeftDrawerOpen = false;
	let isRightDrawerOpen = false;

	if (typeof window !== 'undefined') {
		const userTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		theme.set(userTheme || (systemPrefersDark ? 'dark' : 'light'));

		theme.subscribe((value) => {
			let valueToUse = value === 'device'
				? (systemPrefersDark ? 'dark' : 'light')
				: value;

			$overlayScrollbarOptions.scrollbars.theme =
				valueToUse === 'light' ? 'os-theme-dark' : 'os-theme-light';
		});
	}
</script>

<div class="flex flex-col h-screen">
	<Header
		on:openLeftDrawer={() => {
			isLeftDrawerOpen = true;
			let drawerToggle = document.getElementById('drawer-toggle');
			if(drawerToggle != null){
				drawerToggle.setAttribute('checked', "false");
				console.log();
			}
		}}
		on:openRightDrawer={() => isRightDrawerOpen = true}
	/>
	<div class="flex md:hidden">
		<input type="checkbox" id="drawer-toggle" class="relative hidden sr-only peer" onchange={() => {
			isLeftDrawerOpen = !isLeftDrawerOpen;
		}}>
		<label for="drawer-toggle" class="absolute top-0 h-14 w-14 left-0"></label>

		<div class="fixed flex flex-col justify-between top-[52px] bottom-0 left-0 z-20 w-full duration-100 transform -translate-x-full bg-neutral-50 dark:bg-dark-bg shadow-lg peer-checked:translate-x-0">
			<div class="flex h-full w-full">
				<LeftSideNavigation />
				<div style="writing-mode: vertical-rl" class="w-16 cursor-vertical-text flex items-center justify-between pb-3 pt-4">
					<label class="faded" for="drawer-toggle">
						<a href="https://github.com/imkiptoo" target="_blank">github.com/imkiptoo</a>
					</label>
					<label class="faded" for="drawer-toggle">
						<Icon icon="fluent:dismiss-24-regular" height="24px" />
					</label>
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-full lg:mx-40 overflow-hidden relative">
		<div class="hidden lg:flex h-full">
			<LeftSideNavigation />
		</div>

		<!-- Main Content -->
		<OverlayScrollbarsComponent
			class="flex-1 px-4 flex-grow overflow-auto"
			options={$overlayScrollbarOptions}
			defer
		>
			<div>
				{@render children()}
			</div>
		</OverlayScrollbarsComponent>

		<div class="hidden lg:flex h-full">
			<RightSideNavigation class="hidden" />
		</div>
	</div>
</div>
