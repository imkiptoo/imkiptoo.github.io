<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let tooltip;
</script>

<div
	class="cursor-pointer"
	title="{tooltip}"
	{...$$restProps}
>
	<Icon icon="{icon}" height="24px" />
</div>