const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin({

    }), new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }), new CopyWebpackPlugin([
      { from: 'src/static/', to: '', ignore: ['*favicon*.*']},
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
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
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      }, {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};