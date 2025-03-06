/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			fontSize: '1.6rem',
			container: {
				center: true,
			},
			fontWeight: {
				w400: '400',
				w700: '700',
			},
			colors: {
				primary: {
					limeGreen: 'hsl(163, 72%, 41%)',
					brightRed: 'hsl(356, 69%, 56%)',
				},
				social: {
					facebook: 'hsl(208, 92%, 53%)',
					twitter: 'hsl(203, 89%, 53%)',
					youtube: 'hsl(348, 97%, 39%)',
				},
				gradient: {
					instagram: ['hsl(37, 97%, 70%)', 'hsl(329, 70%, 58%)'],
					darkToggle: ['hsl(210, 78%, 56%)', 'hsl(146, 68%, 55%)'],
				},
				dark: {
					bg: 'hsl(230, 17%, 14%)',
					topBg: 'hsl(232, 19%, 15%)',
					cardBg: 'hsl(228, 28%, 20%)',
					text: 'hsl(228, 34%, 66%)',
					whiteText: 'hsl(0, 0%, 100%)',
				},
				light: {
					bg: 'hsl(0, 0%, 100%)',
					topBg: 'hsl(225, 100%, 98%)',
					cardBg: 'hsl(227, 47%, 96%)',
					text: 'hsl(228, 12%, 44%)',
					darkText: 'hsl(230, 17%, 14%)',
					toggle: 'hsl(230, 22%, 74%)',
				},
			},
		},
	},
	plugins: [require('daisyui')],
}
