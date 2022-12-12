<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul
			class="menu p-4 w-80 bg-base-200 text-base-content border-t-2 border-primary border-opacity-50"
		>
			<!-- Sidebar content here -->
			<li>
				<a
					class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-focus  font-display drop-shadow-sm hover:text-primary-focus"
					>Home</a
				>
			</li>
			<li>
				<a
					class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-focus font-display drop-shadow-sm hover:text-primary-focus"
					>Profile</a
				>
			</li>
		</ul>
	</div>
</div>
