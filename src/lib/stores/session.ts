import { writable } from 'svelte/store';

export const session = writable({
	uid: '',
	displayName: '',
	avatarUrl: '',
	firebaseClientConfig: {}
});
