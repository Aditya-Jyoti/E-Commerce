/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#2B2621',
				light: '#C2B6A2',
				accent: '#C57D57'
			},
			fontFamily: {
				MainText: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
};
