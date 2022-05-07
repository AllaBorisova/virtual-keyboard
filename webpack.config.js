const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/scripts/index.js',
	output: {
		filename: 'bundle.js',
		//filename: '[hash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	mode: "development",
	devServer: {
		static: './dist',
		port: 3002,
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'My App',
		filename: 'index.html',
		template: './src/index.html'
	})],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};