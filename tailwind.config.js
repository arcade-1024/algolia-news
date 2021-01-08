module.exports = {
	purge: {
		enabled:true,
		content: [
			"./src/**/*.html",
			"./src/**/*.js",
			"./src/**/*.tsx",
			"./src/**/*.jsx",
			"./public/index.html",
		],
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				grey: {
					100:'#F5F5FA',
					200: "#D2DEDF",
					500: "#22222B",
					400: "#32323F",
					600: "#17171E",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
