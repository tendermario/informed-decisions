const path = require("path");
const webpack = require('webpack');
// let minimize = process.argv.indexOf('--min') !== -1;

module.exports = {
	resolve: {
	  root: path.resolve('./src'),
      // alias: { soundmanager2: 'soundmanager2/script/soundmanager2-nodebug-jsmin.js' },
	    modulesDirectories: ["node_modules"],
      extensions:         ["", ".js", ".jsx", ".json"]
	},
    entry: './src/client.jsx',
	  output: {
		path: './public/js',
		filename: 'bundle.js'
	},
	plugins: [],
	devServer: {
		inline: false,
		port: 3333,
    historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	}
};

// if (minimize) {
// 	let minimized = cloneDeep(defaults);
// 	minimized.plugins.push(new webpack.DefinePlugin({
// 			'process.env': {
// 				// Useful to reduce the size of client-side libraries, e.g. react
// 				NODE_ENV: JSON.stringify('production'),
// 				PLATFORM_ENV: JSON.stringify('web'),
// 			},
// 		})
// 	);
// 	minimized.plugins.push(
// 		new webpack.optimize.DedupePlugin()
// 	);
// 	minimized.plugins.push(
// 		new webpack.optimize.OccurenceOrderPlugin()
// 	);
// 	minimized.plugins.push(
// 		new webpack.optimize.UglifyJsPlugin({
// 			compress: {
// 				warnings: false,
// 			},
// 		})
// 	);
// 	minimized.output.filename = 'bundle.min.js';
// 	module.exports = [ defaults, minimized ];
// } else {
// 	module.exports = [ defaults ];
// }