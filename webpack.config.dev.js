const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
        ],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src/assets/img',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});