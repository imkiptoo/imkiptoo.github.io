<script>
	import Icon from '@iconify/svelte';
</script>
<div class="flex flex-col space-y-4 py-4">
	<div class="text-sm text-neutral-400">Configurations</div>
	<div class="flex flex-col space-y-4">
		<!-- Theme -->
		<div>
			<div class="font-medium text-black mb-2">Theme</div>
			<div class="btn-group">
				<button class="btn active" title="Automatic Brightness">
					<Icon icon="material-symbols:brightness-auto-outline-rounded" height="20"/>
				</button>
				<button class="btn" title="Light Mode">
					<Icon icon="material-symbols:sunny-outline-rounded" height="20"/>
				</button>
				<button class="btn" title="Dark Mode">
					<Icon icon="material-symbols:dark-mode-outline-rounded" height="20"/>
				</button>
				<button class="btn" title="Braun">
					<Icon icon="material-symbols:apparel-outline" height="20"/>
				</button>
			</div>
		</div>

		<!-- Font size -->
		<div>
			<div class="font-medium text-black mb-2">Font size</div>
			<div class="btn-group">
				<button class="btn">S</button>
				<button class="btn active">M</button>
				<button class="btn">L</button>
			</div>
		</div>

		<!-- Column width -->
		<div>
			<div class="font-medium text-black mb-2">Page width</div>
			<div class="btn-group">
				<button class="btn">S</button>
				<button class="btn active">M</button>
				<button class="btn">L</button>
			</div>
		</div>

		<!-- Text align -->
		<div>
			<div class="font-medium text-black mb-2">Text align</div>
			<div class="btn-group">
				<button class="btn active">Auto</button>
				<button class="btn">Justify</button>
			</div>
		</div>

		<!-- Language -->
		<div>
			<div class="font-medium text-black mb-2">Language</div>
			<div class="btn-group">
				<button class="btn active" title="English">
					<Icon icon="twemoji:flag-united-kingdom" height="20"/>
				</button>
				<button class="btn" title="Deutsch">
					<Icon icon="twemoji:flag-germany" height="20" class="grayscale opacity-50"/>
				</button>
				<button class="btn" title="Français">
					<Icon icon="twemoji:flag-france" height="20" class="grayscale opacity-50"/>
				</button>
				<button class="btn" title="Español">
					<Icon icon="twemoji:flag-spain" height="20" class="grayscale opacity-50"/>
				</button>
			</div>
		</div>
	</div>
</div>