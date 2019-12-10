const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const Stylelint = require('stylelint-webpack-plugin');

const devConfig = merge(baseConfig, {
  mode: 'development',
  output: {
    pathinfo: false,
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: '#@cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8081,
    host: '0.0.0.0',
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }), new Stylelint({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      emitWarning: true,
      fix: true,
    }), new HtmlPlugin({
      template: 'src/views/index.ejs',
      minify: false,
    }), new SpritePlugin({
      plainSprite: true,
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
    }), new CopyPlugin([
      { from: '*favicon*.*', to: '', context: 'src/static'},
      { from: 'img/**/*sprite*.svg', to: '', context: 'src/assets/'},
    ]), new MiniCssPlugin({
      filename: 'styles/[name].css',
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
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              emitError: true,
              emitWarning: true,
              failOnError: false,
            },
          },
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
              sourceMap: true,
            },
          },
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
              name: '[path][name].[ext]',
              context: 'src/assets/img',
              outputPath: 'img',
            },
          },
        ],
      }, {
        test: /\.svg$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          // 'cache-loader',
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
              extract: true,
              spriteFilename: 'img/sprite.svg',
            },
          },
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        use: [
          'cache-loader',
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
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
  resolve(devConfig);
});