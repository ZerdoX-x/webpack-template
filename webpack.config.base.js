const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  // target: 'web',
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
    new webpack.ProvidePlugin({
      
    }), new HtmlPlugin({
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
          page: {
            title: 'Home',
            filename: 'index',
          },
        };
      },
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
          'html-loader',
        ],
      },
    ],
  },
};