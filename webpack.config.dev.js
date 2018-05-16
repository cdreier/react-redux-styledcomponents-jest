const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')


module.exports = merge.smart(common, {
  devtool: 'source-map',
  mode: 'development',
})