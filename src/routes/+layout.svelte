<script lang="ts">
	import '../app.css';
	import NavItem from '$lib/components/nav/NavItem.svelte';
	import SubNavItem from '$lib/components/nav/SubNavItem.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import { overlayScrollbarOptions } from '$lib/scrollOptionsStore.js';
	import Configurations from '$lib/components/right-pane/Configurations.svelte';
	import Links from '$lib/components/right-pane/Links.svelte';
	import Credits from '$lib/components/right-pane/Credits.svelte';

	const navItems = [
		{ title: 'Home', url: '/home', subNav: [] },
		{ title: 'About', url: '/about', subNav: [] },
		{
			title: 'Education', url: '/education', subNav: [
				{ title: 'Masters', url: '/education/masters' },
				{ title: 'Bachelors', url: '/education/bachelors' }
			]
		},
		{
			title: 'Work Experience', url: '/work', subNav: [
				{ title: '2019 - 2021', url: '/work/19to21' },
				{ title: '2021 - 2024', url: '/work/21to24' }
			]
		},
		{
			title: 'Projects', url: '/projects', subNav: [
				{ title: 'Multi-Factor Authentication System', url: '/projects/mfa' },
				{ title: 'NDIS Document Management System', url: '/work/ndis-ds' },
				{ title: 'Supply Chain ERP System', url: '/work/supply-chain-erp' },
				{ title: 'Database Synchronization Software', url: '/work/cdss' },
				{ title: 'Diary Management System', url: '/work/cdss' }
			]
		},
		{
			title: 'Skills', url: '/skills', subNav: [
				{ title: 'Back-End SE', url: '/skills/back-end' },
				{ title: 'Front-End SE', url: '/skills/front-end' },
				{ title: 'Databases', url: '/skills/database' },
				{ title: 'DevOps', url: '/skills/devops' }
			]
		},
		{ title: 'Languages', url: '/languages', subNav: [] },
		{ title: 'Volunteering', url: '/volunteering', subNav: [] }
	];

	let { children } = $props();
</script>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex h-full mx-40 overflow-hidden">
		<OverlayScrollbarsComponent
			class="h-full w-80 py-2 px-2 border-r"
			options={$overlayScrollbarOptions}
			defer
		>
			<div class="flex flex-col space-y-2">
				{#each navItems as { title, url, subNav }}
					<div class="flex flex-col">
						<NavItem title={title} url={url} />
						{#each subNav as { title: subTitle, url: subUrl }}
							<SubNavItem title={subTitle} url={subUrl} />
						{/each}
					</div>
				{/each}
			</div>
		</OverlayScrollbarsComponent>
		<OverlayScrollbarsComponent
			class="flex-1 px-4 flex-grow overflow-auto"
			options={$overlayScrollbarOptions}
			defer
		>
			<div class="h-[10000px]">
				<div class="py-4">
					{@render children()}
				</div>
			</div>
		</OverlayScrollbarsComponent>
		<OverlayScrollbarsComponent
			class="h-full w-80 px-4 border-l flex flex-col justify-between"
			options={$overlayScrollbarOptions}
			defer
		>
			<div class="flex h-full flex-col">
				<div class="flex flex-col flex-grow flex-1	 space-y-4 divide-y">
					<Links/>
					<Configurations/>
				</div>
				<Credits/>
			</div>
		</OverlayScrollbarsComponent>
	</div>
</div>