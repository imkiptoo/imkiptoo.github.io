<script>
	import HeaderLink from '$lib/components/header/HeaderLink.svelte';
</script>

<div class="flex w-full px-40 h-14 justify-between shadow-md bg-black text-white">
	<div class="flex justify-center items-center font-sans font-bold px-4">
		<div class="flex space-x-4 justify-center items-center">
			<!--<div>
				<img src="/images/profile.jpg" alt="Profile" class="h-8 w-8	object-cover object-top rounded-full" />
			</div>-->
			<div class="">
				<span class="">Isaac Kiptoo Mulwa</span>&emsp;&CenterDot;&emsp;<span class="font-thin italic">Software Engineer</span>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-center space-x-5 px-4">
		<!--<HeaderLink icon="mdi:github" tooltip="GitHub"/>
		<HeaderLink icon="fa6-brands:linkedin"	 tooltip="LinkedIn"/>
		<HeaderLink icon="fa6-brands:xing" tooltip="Xing"/>-->
		<HeaderLink icon="material-symbols:captive-portal-rounded" tooltip="Profile Links"/>
		<div class="bg-white opacity-20 w-[1px] h-7"></div>
		<HeaderLink icon="material-symbols:mail-outline-rounded" tooltip="Send Email"/>
		<HeaderLink icon="material-symbols:settings-motion-mode-outline-rounded" tooltip="UI Configuration"/>
		<HeaderLink icon="material-symbols:download-rounded" tooltip="Download CV"/>
		<div class="bg-white opacity-20 w-[1px] h-7"></div>
		<HeaderLink icon="circle-flags:de" tooltip="Change Language" class="rounded-full border border-neutral-200"/>
	</div>
</div>