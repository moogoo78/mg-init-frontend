var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractStyle = new ExtractTextPlugin('../css/bundle.css');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['eslint-loader','babel-loader']
      }
    ],
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractStyle.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1, sourceMap: true },
            },
            'postcss-loader',
          ],
        })
      }
    ],
  },
  entry: {
    bundle: ['./src/global.js', './src/app.js', './src/style.css']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static/js/')
  },
  plugins: [
    ExtractStyle
  ],  
  devtool: 'cheap-module-source-map',
}
