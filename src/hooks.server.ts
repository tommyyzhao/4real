import type { Handle } from '@sveltejs/kit';
import { SECRET_FIREBASE_CLIENT_CONFIG } from '$env/static/private';
import { session } from '$lib/stores/session';

export const handle: Handle = async ({ event, resolve }) => {
	session.update((oldSession) => {
		oldSession.firebaseClientConfig = JSON.parse(SECRET_FIREBASE_CLIENT_CONFIG);
		return oldSession;
	});
	const response = await resolve(event);
	return response;
};
