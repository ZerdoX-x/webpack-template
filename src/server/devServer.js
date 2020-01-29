import path from 'path'
import express from 'express'
const app = express(),
      DIST_DIR = __dirname,
      HTML_FILE = path.join(DIST_DIR, 'index.html')

import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config.dev.js'
const compiler = webpack(config)

app.use(devMiddleware(compiler, {
  publicPath: "/",
  // noInfo: true,
}))
app.use(hotMiddleware(compiler, {
  
}))



app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})


const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
