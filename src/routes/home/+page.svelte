<script lang="ts">
	import { getContext } from 'svelte';
	import type { PageData } from './$types';
	import { session } from '$lib/stores/session';

	export let data: PageData;
</script>

<h1>Dis is da home page for {$session.displayName}</h1>
<h1>UID {$session.uid}</h1>
<!--Display profile photo-->
{#if $session.avatarUrl}
	<div class="avatar">
		<div class="w-24 mask mask-squircle">
			<img src={$session.avatarUrl} alt="Profile photo" />
		</div>
	</div>
{:else}
	<div class="avatar placeholder">
		<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl">{$session.displayName.charAt(0)}</span>
		</div>
	</div>
{/if}
