<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let tooltip;
</script>

<div
	{...$$restProps}
	class="cursor-pointer"
	title="{tooltip}"
>
	<Icon icon="{icon}" height="24px" />
</div>