/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		colors: {
			...colors,
			primary: '#AD9A72',
			secondary: '#D51143',
		},
		maxHeight: {
			'0': '0',
			'1/10': '10%',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'4/5': '80%',
			'full': '100%',
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/custom-forms'),
	]
}
