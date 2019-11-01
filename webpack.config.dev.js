const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: '#@cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }), new StylelintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      emitWarning: true,
      fix: true,
    }), new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      minify: false,
    }), new HtmlBeautifyPlugin({
      config: {
          html: {
            end_with_newline: false,
            indent_size: 2,
            indent_with_tabs: false,
            indent_inner_html: false,
            preserve_newlines: false,
            unformatted: ['p', 'i', 'b', 's', 'span'],
          },
      },
      replace: [ ' type="text/javascript"' ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            }
          },
        ],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
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
  resolve(devWebpackConfig);
});