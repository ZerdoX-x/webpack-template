const path = require('path');
const express = require('express');
const app = express();

const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config.dev.js');
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: '/',
  // noInfo: true,
}));
app.use(hotMiddleware(compiler, {
  
}));



app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(path.join(__dirname, 'index.html'), (err, result) => {
    if (err) return next(err);
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
