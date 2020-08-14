const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles')
}

module.exports = {
  // entry: './src/index.ts',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'ordering-api-sdk.js',
  //   library: 'Ordering',
  //   libraryExport: 'default',
  //   libraryTarget: 'umd',
  //   globalObject: 'this',
  // },
  entry: {
    'ordering-sdk': [PATHS.entryPoint],
    'ordering-sdk.min': [PATHS.entryPoint]
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Ordering',
    umdNamedDefine: true
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'ordering-api-sdk.js',
  //   library: '',
  //   libraryExport: '',
  //   libraryTarget: 'umd',
  //   globalObject: 'this'
  // },
  devServer: {
    contentBase: path.join(__dirname, '_bundles'),
    filename: 'ordering-sdk.min.js',
    compress: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ordering-api-sdk',
      template: 'index.html',
      inject: false
    })
  ]
}
