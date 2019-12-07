const webpack = require('webpack');
const path = require('path');
const { CleanPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
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
    new CleanPlugin({

    }), new webpack.ProvidePlugin({
      
    }),
  ],
  module: {
    rules: [
      {
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
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'html-loader'
        ],
      }, {
        test: /\.hbs$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'handlebars-loader'
        ],
      },
    ],
  },
};