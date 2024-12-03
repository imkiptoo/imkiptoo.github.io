<script>
	export let icon;
	export let alt;
	export let href;
	export let title;
</script>
<div class="flex space-x-2">
	<img src="{icon}" class="h-6 w-6" alt="{alt}" />
	<div class="hover:underline">
		<a href="{href}" target="_blank" rel="noopener noreferrer" class="text-sm text-black">{title}</a>
	</div>
</div>