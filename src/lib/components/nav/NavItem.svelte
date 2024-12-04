<script lang="ts">

	import { simulateLabelClick } from '$lib/components/nav/NavSetup';

	export let title;
	export let link;
	export let extraClass = "";

	const handleClick = () => {
		const targetElement = document.getElementById(link);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });

			simulateLabelClick();
		}
	};
</script>

<div {...$$restProps} class="hover:underline font-ibm-plex-serif font-medium cursor-pointer w-full rounded {extraClass}">
	<button class="nav-item w-full text-start hover:underline px-2 py-1.5" on:click="{handleClick}">{title}</button>
</div>