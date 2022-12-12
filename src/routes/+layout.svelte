<script lang="ts">
	import '$lib/global.css';
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
	import GiPalette from 'svelte-icons/gi/GiPalette.svelte';
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import { onMount, setContext } from 'svelte';
	import { themeChange } from 'theme-change';
	import { page } from '$app/stores';
	import { session } from '$lib/stores/session';
	import { goto } from '$app/navigation';
	import { signInWith, signOut } from '$lib/client/firebaseUtils';
	import { initializeFirebase } from '$lib/client/firebaseUtils';

	/** @type {import('./$types').LayoutData} */
	export let data;

	try {
		initializeFirebase(data.firebaseClientConfig);
	} catch (ex) {
		console.error(ex);
	}

	onMount(() => {
		// init theme change library
		themeChange(false);
	});

	let email = '';
	let password = '';
</script>

<div class="navbar backdrop-blur-sm sticky top-0 z-10">
	<label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-6 h-6 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/></svg
		>
	</label>
	<div class="flex-1 px-4 lg:flex-none">
		<a class="text-2xl font-bold text-primary font-display drop-shadow-md shadow-secondary" href="/"
			>4real</a
		>
	</div>
	<div class="flex justify-end flex-1 px-2 z-10">
		<div class="flex items-stretch  z-10">
			<div class="dropdown dropdown-end z-10">
				<div tabindex="-1" class="btn btn-ghost rounded-btn">
					<icon class="w-6 h-6">
						<GiPalette />
					</icon>
					<icon class="w-3 h-3 ml-1">
						<FaChevronDown />
					</icon>
				</div>
				<ul class="menu dropdown-content p-2 shadow rounded-box w-52 mt-4 z-10">
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="light"
							data-set-theme="light"
							data-act-class="outline">Light ⚪</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="emerald"
							data-set-theme="emerald"
							data-act-class="outline">Emerald 🟩</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="corporate"
							data-set-theme="corporate"
							data-act-class="outline">Corporate 👔</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="autumn"
							data-set-theme="autumn"
							data-act-class="outline">Autumn 🍁</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="garden"
							data-set-theme="garden"
							data-act-class="outline">Garden 🌱</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="retro"
							data-set-theme="retro"
							data-act-class="outline">Retro 🕹</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="coffee"
							data-set-theme="coffee"
							data-act-class="outline">Coffee ☕️</button
						>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="night"
							data-set-theme="night"
							data-act-class="outline"
							>Night 🌙
						</button>
					</li>
					<li>
						<button
							class="text-primary font-bold z-10"
							data-theme="dark"
							data-set-theme="dark"
							data-act-class="outline"
							>Dark ⬛
						</button>
					</li>
				</ul>
			</div>
			<!--Logout button-->
			{#if $session.uid}
				<button
					class="btn btn-primary btn-outline"
					on:click={() => {
						signOut();
						// location.href = '/';
					}}>Logout</button
				>
			{/if}
		</div>
	</div>
</div>

{#if $session.uid}
	<slot />
{:else}
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse items-start">
			<div class="text-center lg:text-left lg:mt-12 lg:ml-8">
				<h1 class="text-5xl font-bold font-display">Collaborate. 4'real</h1>
			</div>
			<div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
				<div class="card-body">
					<h1 class="text-2xl font-bold">Sign in to your account</h1>
					<div>
						<div class="label">
							<span class="label-text font-medium">Sign in with</span>
						</div>
						<button
							on:click={() => {
								signInWith('google');
							}}
							class="h-6 btn btn-outline opacity-50 w-1/3"
							><icon class="w-6 h-6">
								<FaGoogle />
							</icon>
						</button>
						<button
							on:click={() => signInWith('twitter')}
							class="h-6 btn btn-outline opacity-50 w-1/3"
							><icon class="w-6 h-6">
								<FaTwitter />
							</icon>
						</button>
					</div>
					<div class="divider"><span class="font-thin">Or continue with</span></div>

					<div class="form-control">
						<div class="label">
							<span class="label-text font-medium">Email</span>
						</div>
						<input
							type="text"
							placeholder="email"
							bind:value={email}
							class="input input-bordered"
						/>
					</div>
					<div class="form-control">
						<div class="label">
							<span class="label-text font-medium">Password</span>
						</div>
						<input
							type="text"
							placeholder="password"
							bind:value={password}
							class="input input-bordered"
						/>
						<div class="label">
							<a href="/forgot-password" class="label-text-alt link link-hover">Forgot password?</a>
						</div>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Login</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
