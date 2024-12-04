<script lang="ts">
	import NavItem from '$lib/components/nav/NavItem.svelte';
	import SubNavItem from '$lib/components/nav/SubNavItem.svelte';
	import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
	import { overlayScrollbarOptions } from '$lib/scrollOptionsStore.js';
	import { navigation } from '$lib/components/nav/NavSetup';
	import { activeSection } from '../../../stores/activeSectionStore';

	// Use the updated navItems with hyphen-separated links
	const navItems = navigation.navItems;
</script>

<OverlayScrollbarsComponent
	class="h-full w-80 py-2 px-2 border-r border-r-light-border dark:border-r-dark-border"
	options={$overlayScrollbarOptions}
	defer
>
	<div class="flex flex-col space-y-2">
		{#each navItems as { title, link, subNav }}
			<div class="flex flex-col">
				<NavItem
					title={title}
					link={link}
					extraClass={$activeSection === link ? 'text-primary dark:text-primary-dark font-semibold underline' : ''}
				/>
				{#if subNav && subNav.length > 0}
					{#each subNav as { title: subTitle, link: subLink }}
						<SubNavItem
							title={subTitle}
							link={subLink}
							extraClass={$activeSection === subLink ? 'text-primary dark:text-primary-dark font-semibold underline' : 'faded'}
						/>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
</OverlayScrollbarsComponent>
