const webpack = require('webpack');
const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const htmlMinifierConfig = require('./.htmlminrc.json');
const pages = require('./pages.json');
const aliases = require('./aliases.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'client/[name].[hash].bundle.js',
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
  resolve: {
    descriptionFiles: ['package.json'],
    modules: ['node_modules'],
    alias: aliases,
    symlinks: false,
  },
  plugins: [
    new webpack.ProvidePlugin({

    }), new MiniCssPlugin({
      filename: 'styles/[name].[contenthash].css',
    }), ...pages.map((page) => {
      return new HtmlPlugin({
        template: 'src/views/layouts/main.ejs',
        minify: false,
        templateParameters: (compilation, assets, assetTags, options) => {
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options,
            },
            page: page,
          };
        },
      });
    }), new VueLoaderPlugin(
    ), new FaviconsPlugin({
      logo: './src/static/favicon.png',
      publicPath: '.',
      prefix: 'favicon/',
      outputPath: '/favicon',
    }), new SpritePlugin({
      plainSprite: true,
    }), new CopyPlugin([
      { from: 'src/static/', to: '', ignore: ['*favicon*.*'], },
      { from: 'img/**/*sprite*.svg', to: '', context: 'src/assets/', },
    ]), new HtmlMinifierPlugin(
      htmlMinifierConfig
    ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader',
        ],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        use: [
          // 'cache-loader',
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
              extract: true,
              spriteFilename: 'img/sprite.[contenthash].svg',
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
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          'html-loader',
        ],
      },
    ],
  },
};
