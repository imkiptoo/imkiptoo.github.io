<script lang="ts">
	import { simulateLeftLabelClick } from '$lib/components/nav/NavSetup';

	export let title;
	export let link;
	export let extraClass = "";

	const handleClick = () => {
		const targetElement = document.getElementById(link);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });

			simulateLeftLabelClick();
		}
	};
</script>

<div {...$$restProps} class="{extraClass} hover:underline text-sm cursor-pointer w-full rounded">
	<button class="nav-item w-full text-start hover:underline px-2 py-1.5" on:click="{handleClick}">{title}</button>
</div>