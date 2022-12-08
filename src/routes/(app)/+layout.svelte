<script>
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
	import GiPalette from 'svelte-icons/gi/GiPalette.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<div class="navbar backdrop-blur-sm sticky top-0">
	<div class="flex-1 px-2 lg:flex-none">
		<a class="text-2xl font-bold text-primary font-display">4real</a>
	</div>
	<div class="flex justify-end flex-1 px-2">
		<div class="flex items-stretch">
			<div class="dropdown dropdown-end">
				<label tabindex="-1" class="btn btn-ghost rounded-btn">
					<icon class="w-6 h-6">
						<GiPalette />
					</icon>
					<icon class="w-3 h-3 ml-1">
						<FaChevronDown />
					</icon>
				</label>
				<ul class="menu dropdown-content p-2 shadow rounded-box w-52 mt-4 z-10">
					<li>
						<button
							class="text-primary font-bold"
							data-theme="light"
							data-set-theme="light"
							data-act-class="outline">Light ⚪</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="emerald"
							data-set-theme="emerald"
							data-act-class="outline">Emerald 🟩</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="corporate"
							data-set-theme="corporate"
							data-act-class="outline">Corporate 👔</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="autumn"
							data-set-theme="autumn"
							data-act-class="outline">Autumn 🍁</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="garden"
							data-set-theme="garden"
							data-act-class="outline">Garden 🌱</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold btn-ghost"
							data-theme="retro"
							data-set-theme="retro"
							data-act-class="outline">Retro 🕹</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="coffee"
							data-set-theme="coffee"
							data-act-class="outline">Coffee ☕️</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="night"
							data-set-theme="night"
							data-act-class="outline"
							>Night 🌙
						</button>
					</li>
					<li>
						<button
							class="text-primary font-bold"
							data-theme="dark"
							data-set-theme="dark"
							data-act-class="outline"
							>Dark ⬛
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<slot />
