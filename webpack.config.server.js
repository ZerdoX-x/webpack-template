const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, {mode}) => {
  const SERVER_PATH = (mode === 'production') ?
    './src/server/prodServer.js' :
    './src/server/devServer.js';

  return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    mode: mode,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  });
};
