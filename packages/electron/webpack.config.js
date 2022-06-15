const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		mode: 'development',
		entry: './src/index.ts',
		target: 'electron-main',
		module: {
			rules: [
				{
					test: /\.ts$/,
					include: /src/,
					use: [{ loader: 'ts-loader' }],
				},
				{
					test: /\.node$/,
					use: [{ loader: 'node-loader' }],
				},
				{
					test: /\.(s?)css$/i,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		output: {
			path: __dirname + '/dist',
			filename: 'electron.js',
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	},
];
