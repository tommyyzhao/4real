import type { LayoutServerLoad } from '../$types';
import type { FirebaseOptions } from 'firebase/app';
import { SECRET_FIREBASE_CLIENT_CONFIG } from '$env/static/private';
import type { Cookies } from '@sveltejs/kit';
import { browser } from '$app/environment';

export const load: LayoutServerLoad = async ({ cookies }: { cookies: Cookies }) => {
	cookies.set('token', '1234444', { path: '/' });
	console.log('layout server load ' + cookies.get('token'));
	let FIREBASE_CLIENT_CONFIG: FirebaseOptions = JSON.parse(SECRET_FIREBASE_CLIENT_CONFIG) || {};
	return { firebaseClientConfig: FIREBASE_CLIENT_CONFIG };
};
