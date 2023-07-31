/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './index.html'],
	theme: {
		fontFamily: {
			font: ['Encode Sans Expanded', 'sans-serif'],
		},
		backgroundColor: {
			color_1: '#243782',
			color_2: '#E94E24',
			color_3: '#43AAA0',
			color_4: '#ECA935',
			color_5: '#282B43',
		},
		textColor: {
			color_3: '#43AAA0',
         color_4: '#ECA935',
		},
      gridTemplateRows: {
         'chat': '85% 15%'
      },
      borderColor: {
         color_2: '#E94E24',
         color_3: '#43AAA0',
         color_4: '#ECA935',
         color_5: '#282B43',
      }
	},
	plugins: [],
}
