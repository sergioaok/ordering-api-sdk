const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles')
}

module.exports = {
  // entry: './src/index.ts',
  entry: {
    'my-lib': [PATHS.entryPoint],
    'my-lib.min': [PATHS.entryPoint]
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'ordering-api-sdk.js',
  //   library: 'Ordering',
  //   libraryExport: 'default',
  //   libraryTarget: 'umd',
  //   globalObject: 'this',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ordering-api-sdk.min.js',
    library: '',
    libraryExport: '',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'ordering-api-sdk.js',
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
        exclude: /(node_modules|bower_components)/,
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ordering-api-sdk',
      template: 'index.html',
      inject: false
    }),
  ]
}
