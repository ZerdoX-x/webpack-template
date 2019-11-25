const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  resolve: {
    descriptionFiles: ['package.json'],
    modules: ['node_modules'],
    symlinks: false,
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({

    }), new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }), new CopyWebpackPlugin([
      { from: 'src/static/', to: '', ignore: ['*favicon*.*'],},
      { from: 'src/assets/img/**/*sprite*.svg', to: 'img',},
    ]), new SpriteLoaderPlugin({

    }), new webpack.ProvidePlugin({
      
    }),
  ],
  module: {
    rules: [
      {
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
      }, {
        test: /\.(csv|tsv)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          'csv-loader',
        ],
      }, {
        test: /\.xml$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          'xml-loader',
        ],
      },
    ],
  },
};