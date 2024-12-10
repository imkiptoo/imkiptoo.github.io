<script>
	import ThemeButton from '$lib/components/right-pane/ThemeButton.svelte';
</script>
<div class="flex flex-col space-y-4 py-4">
	<div class="text-sm text-neutral-400">Configurations</div>
	<div class="flex flex-col space-y-4">
		<!-- Theme -->
		<div>
			<div class="font-medium mb-2">Theme</div>
			<div class="btn-group">
				<ThemeButton title="Automatic Brightness" icon="material-symbols:brightness-auto-outline-rounded" themeName="device"/>
				<ThemeButton title="Light Mode" icon="material-symbols:sunny-outline-rounded" themeName="light"/>
				<ThemeButton title="Dark Mode" icon="material-symbols:dark-mode-outline-rounded" themeName="dark"/>
			</div>
		</div>

		<!-- Font size -->
		<div>
			<div class="font-medium mb-2">Font size</div>
			<div class="btn-group">
				<button class="btn">S</button>
				<button class="btn active">M</button>
				<button class="btn">L</button>
			</div>
		</div>

		<!-- Column width -->
		<div>
			<div class="font-medium mb-2">Page width</div>
			<div class="btn-group">
				<button class="btn">S</button>
				<button class="btn active">M</button>
				<button class="btn">L</button>
			</div>
		</div>

		<!-- Text align -->
		<div>
			<div class="font-medium mb-2">Text align</div>
			<div class="btn-group">
				<button class="btn active">Auto</button>
				<button class="btn">Justify</button>
			</div>
		</div>

		<!-- Language -->
		<div>
			<div class="font-medium mb-2">Language</div>
			<div class="btn-group">
				<button class="btn active" title="English">
					ENG
				</button>
				<button class="btn" title="Deutsch">
					DEU
				</button>
				<button class="btn" title="Français">
					FRA
				</button>
				<!--<button class="btn" title="Español">
					ESP
				</button>-->
			</div>
		</div>
	</div>
</div>