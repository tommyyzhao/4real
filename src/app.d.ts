// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		userid: string;
		token: string | null;
		displayName: string;
		avatarUrl: string;
	}

	// interface Platform {}
	interface Session {
		user: UserSession | undefined;
		firebaseClientConfig: FirebaseOptions;
	}

	interface PageData {
		user: UserSession | undefined;
		firebaseClientConfig: FirebaseOptions;
	}
}
declare module 'AppModule' {
	type Fetch = (info: RequestInfo, init?: RequestInit) => Promise<Response>;
	type AnyObject = Record<string, unknown>;
	type Session = App.Session;
}
