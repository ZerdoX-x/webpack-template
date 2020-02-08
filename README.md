# Web Front-End Project Template

This is my webpack template I use for each project

## Requirements

You only need [Node.js](https://nodejs.org) pre-installed and you’re good to go.

## Downloading and setup

1. `git clone https://github.com/ZerdoX-x/webpack-template.git` Download template
2. `cd webpack-template` Move to project directory
3. `npm i && npm run clean` Cleanup and install dependencies
4. `mv ../webpack-template ../<project_name>` Rename root directory of project

## Tools and features

- [Babel](https://babeljs.io) _//.babelrc_
- [PostCSS](https://postcss.org) _//postcss.congig.json_
- [Stylelint](https://stylelint.io) _//stylelintrc.json_
- [Express Server](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334) _//in webpack.config.server.js_
- [SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) _//[generated inline for html, extracted for css/js](https://github.com/JetBrains/svg-sprite-loader/tree/master/examples/interop-with-html-webpack-plugin) id = filename_
- [Image Compression](https://www.npmjs.com/package/image-webpack-loader) _//in webpack.config.prod.js_
- [ESLint](https://eslint.org)  _//.eslintrc.json_
- [BEM Methodology](https://en.bem.info) _//structure of this methodology in blocks folder_

## Structure of project

__./webpack-template/__ _- root of your project_  
&nbsp;&nbsp;&nbsp;&nbsp;╰ __dist/__ _- compiled project, result_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __favicon/__ _- all generated favicon files for most browsers/platforms are here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __js/__ _- compiled javascript_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __styles/__ _- compiled css_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __img/__ _- images, svg sprites_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __fonts/__ _- fonts_  
&nbsp;&nbsp;&nbsp;&nbsp;╰ __node_modules/__ _- all dependencies are here, don't touch this_  
&nbsp;&nbsp;&nbsp;&nbsp;╰ __src/__ _- source, this is where you need to write code_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __assets/__ _- fonts, images, other static files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __fonts/__ _- one font-family = one folder_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __fonts-master.css__ _- all fonts assemble to css_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __images/__ _- create folders and put images in here, structure will be saved, svg pre-build sprites supported_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __*.blocks/__ _- blocks on certain level_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __<block_name>/__ _- directory of your block_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __<block_name>.js__ _- main file write, js, import css, templates and other files here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __<block_name>.*__ _- other techs used for implementing blocks_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __\_\_<element_name>.*__ _- directory of your block's element_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __<block_name>_\_<element_name>.*__ _- main file_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __<block_name>_\_<element_name>.*__ _- other techs used for implementing_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __js/__ _- javascript source files and folders in here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __helpers/__ _- your javascript helpers are here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __modules/__ _- store your functionality to separate files in this folder and import them in the entry point file_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __vendor/__ _- vendor’s specific js_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __commons.js__ _- main javascript file, you should import all javascript from relative directories into here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __server/__ _- servers, write your backend here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __routes__ _- routing for your server_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __devServer.js__ _- server for development_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __prodServer.js__ _- server for production_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __static/__ _- files will be copied to root of dist folder (favicon/robots.txt/sitemap/etc)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __favicon.(png|svg)__ _- you need to put icon of your application here and name it 'favicon' (svg or png only)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __humans.txt__ _- humans.txt file, [learn more](http://humanstxt.org)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __robots.txt__ _- robots.txt file, [learn more](https://www.robotstxt.org)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __sitemap.xml__ _- your sitemap, [learn more](https://support.google.com/webmasters/answer/156184?hl=en)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __styles/__ _- css files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __base/__ _- basic settings, generic styles_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __helpers/__ _- utilities/helpers files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __vendor/__ _- vendor’s specific css_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __style.css__ _- main css file, you should import all styles into here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __views/__ _- layput files, html, templates, pages, etc_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __layouts/__ _- template files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __main.ejs__ _- page template_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __pages/__ _- pages files, you can add pages in base config_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __index.html__ _- index page_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __pages.json__ _- describe your pages here to automatically add them to webpack config files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╰ __index.js__ _- webpack main entry point_  

## Scripts

- `build` Build/deploy/release project
- `dev` Start server with autocompile, use it for development, open 0.0.0.0:8081 or localhost:8081
Tip: you can find out your pc's address with `hostname -I` and use it like this `<hostname -I>:8081` from your phone for example (gadgets need to be connected to one wi-fi)
In windows you can you ipconfig command
