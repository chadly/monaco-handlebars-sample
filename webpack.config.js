/* eslint-env node */
/* eslint-disable import/no-commonjs */
const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: "babel-loader"
				},
				include: [path.resolve("./src")]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [new MonacoWebpackPlugin()],
	devServer: {
		contentBase: "public",
		port: 1337
	}
};
