<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import { overlayScrollbarOptions } from '$lib/scrollOptionsStore.js';
	import { theme } from '../stores/theme';
	import LeftSideNavigation from '$lib/components/nav/LeftSideNavigation.svelte';
	import RightSideNavigation from '$lib/components/right-pane/RightSideNavigation.svelte';
	import Icon from '@iconify/svelte';
	import { simulateLeftLabelClick, simulateRightLabelClick } from '$lib/components/nav/NavSetup';

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
			simulateLeftLabelClick();
		}}
		on:openRightDrawer={() => {
			isLeftDrawerOpen = false;
			simulateRightLabelClick();
		}}
	/>
	<div class="flex mt-14 lg:hidden">
		<input type="checkbox" id="left-drawer-toggle" class="relative sr-only peer" onchange={() => {
			isLeftDrawerOpen = !isLeftDrawerOpen;
		}}>
		<label for="left-drawer-toggle" class="absolute top-0 h-14 w-14 left-0"></label>

		<div class="fixed flex flex-col justify-between top-[52px] border-t border-t-light-border dark:border-t-dark-border bottom-0 left-0 z-20 w-full duration-100 transform -translate-x-full bg-neutral-50 dark:bg-dark-bg shadow-lg peer-checked:translate-x-0">
			<div class="flex h-full w-full">
				<LeftSideNavigation />
				<div style="writing-mode: vertical-rl" class="min-w-14 cursor-vertical-text flex items-center justify-between pb-3 pt-4">
					<label class="faded" for="left-drawer-toggle">
						<a href="https://github.com/imkiptoo" target="_blank">github.com/imkiptoo</a>
					</label>
					<label class="faded" for="left-drawer-toggle">
						<Icon icon="fluent:dismiss-24-regular" height="24px" />
					</label>
				</div>
			</div>
		</div>
	</div>
	<div class="flex h-full lg:mt-14 mt-0 mx-0 xl:mx-24 2xl:mx-40 overflow-hidden relative">
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
	<div class="flex mt-14 lg:hidden">
		<input type="checkbox" id="right-drawer-toggle" class="relative hidden sr-only peer" onchange={() => {
			isRightDrawerOpen = !isRightDrawerOpen;
		}}>
		<label for="right-drawer-toggle" class="absolute top-0 h-14 w-14 right-0"></label>

		<div class="fixed flex flex-col justify-between top-[52px] border-t border-t-light-border dark:border-t-dark-border bottom-0 right-0 z-10 w-full duration-100 transform translate-x-full bg-neutral-50 dark:bg-dark-bg shadow-lg peer-checked:translate-x-0">
			<div class="flex h-full w-full">
				<div style="writing-mode: vertical-rl" class="min-w-14 cursor-vertical-text flex items-center justify-between pb-3 pt-4">
					<label class="faded" for="right-drawer-toggle">
						<a href="https://github.com/imkiptoo" target="_blank">github.com/imkiptoo</a>
					</label>
					<label class="faded" for="right-drawer-toggle">
						<Icon icon="fluent:dismiss-24-regular" height="24px" />
					</label>
				</div>
				<RightSideNavigation />
			</div>
		</div>
	</div>
</div>
