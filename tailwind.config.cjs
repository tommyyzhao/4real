/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Rowdies'],
				body: ['"Open Sans"']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'emerald',
			'night',
			'coffee',
			'corporate',
			'garden',
			'retro',
			'autumn'
		]
	}
};
