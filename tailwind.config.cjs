/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: "jit",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		screens: {
			'xs': "540px",
			...defaultTheme.screens,
		},
		extend: {},
	},
	plugins: [],
}
