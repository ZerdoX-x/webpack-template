const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');
const Stylelint = require('stylelint-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const pages = require('./src/views/pages.json');


module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: [
      './src/index.js',
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    pathinfo: false,
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    descriptionFiles: ['package.json'],
    modules: ['node_modules'],
    symlinks: false,
  },
  devtool: '#@cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }), new webpack.ProvidePlugin({
      
    }), new SpritePlugin({
      plainSprite: true,
    }), new Stylelint({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.css',
      emitWarning: true,
      fix: true,
    }), ...pages.map((page) => {
      return new HtmlPlugin({
        template: 'src/views/layouts/main.ejs',
        minify: false,
        excludeChunks: [
          'server',
        ],
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
      })
    }), new CopyPlugin([
      { from: 'img/**/*sprite*.svg', to: '', context: 'src/assets/'},
    ]), new FaviconsPlugin({
      logo: './src/static/favicon.png',
      publicPath: '.',
      prefix: 'favicon/',
      outputPath: '/favicon',
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
    }), new webpack.HotModuleReplacementPlugin({

    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
        use: [
          'cache-loader',
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
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
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};