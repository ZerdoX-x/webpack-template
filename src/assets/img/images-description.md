1. Supported extensions: png|jpeg|jpg|gif|svg (edit in webpack.config.dev.js and webpack.config.prod.js).
2. All svg files are merged into sprite, id = name of svg image.
3. If .svg file's name contains "sprite" this file will be copied by copy-webpack-plugin, so you can use pre-build sprites.
4. In production mode images are compressed (edit and configure in webpack.config.prod.js).
5. All images keep structure and hierarchy inside this folder.