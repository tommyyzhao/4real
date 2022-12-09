import * as cookie from 'cookie';
import type { LayoutServerLoad } from './$types';
import type { FirebaseOptions } from 'firebase/app';
import { SECRET_FIREBASE_CLIENT_CONFIG } from '$env/static/private';

export const load: LayoutServerLoad = async ({ request, setHeaders, locals }) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');
	console.log('layout server load');
	console.log(cookies);
	console.log(locals);
	let FIREBASE_CLIENT_CONFIG: FirebaseOptions = JSON.parse(SECRET_FIREBASE_CLIENT_CONFIG) || {};
	return { firebaseClientConfig: FIREBASE_CLIENT_CONFIG };
};
