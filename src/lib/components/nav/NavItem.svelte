<script>
	export let title;
	export let url;
</script>

<div class="hover:underline font-ibm-plex-serif text-black font-medium cursor-pointer w-full rounded">
	<button class="nav-item w-full text-start hover:underline px-2 py-1.5" on:click="{
		() => {
			console.log('Clicked on ', url);
		}
	}">{title}</button>
</div>