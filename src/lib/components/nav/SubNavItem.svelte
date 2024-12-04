<script lang="ts">
	export let title;
	export let link;
	export let extraClass = "";

	const handleClick = () => {
		const targetElement = document.getElementById(link);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<div {...$$restProps} class="{extraClass} hover:underline text-sm cursor-pointer w-full rounded">
	<button class="nav-item w-full text-start hover:underline px-2 py-1.5" on:click="{handleClick}">{title}</button>
</div>