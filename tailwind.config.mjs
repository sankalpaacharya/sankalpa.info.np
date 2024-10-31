/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#fabd2f'
			},
			fontFamily:{
				sans:['Poppins']
			}
		},
	},
	plugins: [],
}
