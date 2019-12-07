const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
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
    }), new StylelintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      emitWarning: true,
      fix: true,
    }), new HtmlWebpackPlugin({
      template: 'src/views/index.hbs',
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
    }), new SpriteLoaderPlugin({
      plainSprite: true,
    }), new CopyWebpackPlugin([
      { from: '*favicon*.*', to: '', context: 'src/static'},
      { from: 'img/**/*sprite*.svg', to: '', context: 'src/assets/'},
    ]), new MiniCssExtractPlugin({
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
          MiniCssExtractPlugin.loader,
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
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
  resolve(devWebpackConfig);
});