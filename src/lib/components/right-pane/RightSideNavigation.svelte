<script>
import { OverlayScrollbarsComponent } from 'overlayscrollbars-svelte';
import Configurations from '$lib/components/right-pane/Configurations.svelte';
import Links from '$lib/components/right-pane/Links.svelte';
import Credits from '$lib/components/right-pane/Credits.svelte';
import { overlayScrollbarOptions } from '$lib/scrollOptionsStore';
</script>

<OverlayScrollbarsComponent
	{...$$restProps}
	class="h-full sm:w-full lg:w-64 xl:w-72 2xl:w-80 px-4 border-l border-l-light-border dark:border-l-dark-border lg:flex lg:flex-col justify-between"
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