<script lang="ts">
	console.log('init');
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	// Import the functions you need from the SDKs you need
	import { initializeApp } from 'firebase/app';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyB1iV7lXhmJgot5vRR0Ear0ORv50WBcRoE',
		authDomain: 'real-0.firebaseapp.com',
		projectId: 'real-0',
		storageBucket: 'real-0.appspot.com',
		messagingSenderId: '108552382150',
		appId: '1:108552382150:web:0d66a8bafd46aaae71d9c7',
		measurementId: 'G-QPVNB9D1EB'
	};

	let email = '';
	let password = '';

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	// login function
	const login = () => {
		console.log('login');
		const auth = getAuth();
		console.log(auth);
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const logout = () => {
		console.log('logout');
	};
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse items-start">
		<div class="text-center lg:text-left lg:mt-12 lg:ml-8">
			<h1 class="text-5xl font-bold font-display">Get Connected. 4'real</h1>
		</div>
		<div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
			<div class="card-body">
				<h1 class="text-2xl font-bold">Sign in to your account</h1>
				<div>
					<label class="label">
						<span class="label-text font-medium">Sign in with</span>
					</label>
					<button class="h-6 btn btn-outline opacity-50 w-1/3"
						><icon on:click={login} class="w-6 h-6">
							<FaGoogle />
						</icon>
					</button>
					<button class="h-6 btn btn-outline opacity-50 w-1/3"
						><icon on:click={logout} class="w-6 h-6">
							<FaTwitter />
						</icon>
					</button>
				</div>
				<div class="divider"><span class="font-thin">Or continue with</span></div>

				<div class="form-control">
					<label class="label">
						<span class="label-text font-medium">Email</span>
					</label>
					<input type="text" placeholder="email" bind:value={email} class="input input-bordered" />
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text font-medium">Password</span>
					</label>
					<input
						type="text"
						placeholder="password"
						bind:value={password}
						class="input input-bordered"
					/>
					<label class="label">
						<a href="#" class="label-text-alt link link-hover">Forgot password?</a>
					</label>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" on:click={login}>Login</button>
				</div>
			</div>
		</div>
	</div>
</div>
