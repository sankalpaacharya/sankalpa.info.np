/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:'#fabd2f',
				muted:'#e8e8e8'
			},
			fontFamily:{
				sans:['Poppins']
			}
		},
	},
	plugins: [ require('@tailwindcss/typography'),],
}
