var DashboardPlugin = require('webpack-dashboard/plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')


module.exports = merge.smart(common, {
  devtool: 'source-map',
  plugins: [
    new DashboardPlugin()
  ]
})