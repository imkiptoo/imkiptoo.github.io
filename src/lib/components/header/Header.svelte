<script>
	import HeaderLink from '$lib/components/header/HeaderLink.svelte';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Dispatch custom events to open drawers
	const openLeftDrawer = () => dispatch('openLeftDrawer');
	const openRightDrawer = () => dispatch('openRightDrawer');
</script>

<div class="flex w-full lg:px-40 h-14 justify-between shadow-md dark:shadow-none dark:border-b border-transparent dark:border-dark-border bg-black dark:bg-transparent text-white" id="my-header">
	<!-- Left section: User information -->
	<div class="flex justify-center items-center font-sans font-bold px-4">
		<div class="flex lg:hidden pr-4">
			<!-- Left Drawer Toggle Icon -->
			<button on:click={openLeftDrawer} class="focus:outline-none">
				<Icon icon="fluent:grid-dots-24-regular" height="24px" />
			</button>

			<!--<input type="checkbox" id="drawer-toggle" class="relative sr-only peer">

			<label for="drawer-toggle" class="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
				asdf
			</label>-->
		</div>
		<span>Isaac Kiptoo Mulwa</span>
		<span class="hidden lg:flex">&CenterDot;</span>
		<span class="hidden lg:flex font-thin italic">Software Engineer</span>
	</div>

	<!-- Right section: Icons and links -->
	<div class="flex lg:hidden justify-center items-center px-4">
		<!-- Right Drawer Toggle Icon -->
		<button on:click={openLeftDrawer} class="focus:outline-none">
			<Icon icon="fluent:settings-24-regular" height="24px" />
		</button>
	</div>

	<div class="hidden lg:flex items-center justify-center space-x-5 px-4">
		<HeaderLink icon="material-symbols:captive-portal-rounded" tooltip="Profile Links" />
		<div class="bg-white opacity-20 w-[1px] h-7"></div>
		<HeaderLink icon="material-symbols:mail-outline-rounded" tooltip="Send Email" />
		<HeaderLink icon="material-symbols:settings-motion-mode-outline-rounded" tooltip="UI Configuration" />
		<HeaderLink icon="material-symbols:download-rounded" tooltip="Download CV" />
		<div class="bg-white opacity-20 w-[1px] h-7"></div>
		<HeaderLink icon="circle-flags:de" tooltip="Change Language" class="rounded-full border border-neutral-200" />
	</div>
</div>
