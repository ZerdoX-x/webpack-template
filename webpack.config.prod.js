const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {

        },
        cache: true,
        parallel: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
    }), new FaviconsPlugin({
      logo: './src/static/favicon.png',
      publicPath: '.',
      prefix: 'favicon/',
      outputPath: '/favicon',
    }), new SpritePlugin({
      plainSprite: true,
    }), new CopyPlugin([
      { from: 'src/static/', to: '', ignore: ['*favicon*.*'],},
      { from: 'img/**/*sprite*.svg', to: '', context: 'src/assets/',},
    ]), new MiniCssPlugin({
      filename: 'styles/[name].[contenthash].css',
    }), new HtmlMinifierPlugin({

    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          'babel-loader',
        ],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssPlugin.loader,
          'cache-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      }, {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash].[ext]',
              context: 'src/assets/img',
              outputPath: 'img',
            },
          }, {
            loader: 'image-webpack-loader',
            options: {
              
            },
          },
        ],
      }, {
        test: /\.svg$/,
        use: [
          // 'cache-loader',
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
              extract: true,
              spriteFilename: `img/sprite.[contenthash].svg`,
            },
          }, {
            loader: 'svgo-loader',
            options: {
              externalConfig: '.svgo.yaml',
            },
          },
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash].[ext]',
              context: 'src/assets/fonts',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(prodConfig);
});