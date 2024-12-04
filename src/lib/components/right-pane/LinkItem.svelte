<script>
	export let icon;
	export let alt;
	export let href;
	export let title;
</script>
<div class="flex space-x-2">
	<img src="{icon}" class="h-[26px] w-[26px]" alt="{alt}" />
	<div class="hover:underline">
		<a href="{href}" target="_blank" rel="noopener noreferrer">{title}</a>
	</div>
</div>