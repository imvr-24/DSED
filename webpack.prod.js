const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    optimization: {
        usedExports: true,
        // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'source-map',
    mode: 'production'
});