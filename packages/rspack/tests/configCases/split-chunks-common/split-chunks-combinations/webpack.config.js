module.exports = {
	entry: {
		main: "./index.js"
	},
	optimization: {
		minimize: false,
		splitChunks: {
			minSize: 100
		}
	},
	externalsType: "commonjs",
	externals: [
		"./~x_js~y_js.js",
		"./async-a.js",
		"./async-b.js",
		"./async-c.js",
		"./async-d.js",
		"./async-e.js",
		"./async-f.js",
		"./async-g.js"
	]
};
