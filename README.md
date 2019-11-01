# Web Front-End Project Template

This is my webpack template I use for each project

## Requirements

You only need [Node.js](https://nodejs.org) pre-installed and you’re good to go.

## Downloading and setup

1. `git clone https://github.com/ZerdoX-x/web-project-starter.git` Download template
2. `cd web-project-starter` Move to project directory
3. `npm run clean && npm i` Cleanup and install dependencies
4. `mv ../web-project-starter ../<project_name>` Rename root directory of project

## Tools and features
- [Babel](https://babeljs.io)
- [PostCSS](https://postcss.org)
- [Stylelint](https://stylelint.io)
- [Live Server](https://github.com/webpack/webpack-dev-server)
- [SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [Image Compression](https://www.npmjs.com/package/image-webpack-loader)
- [ESLint](https://eslint.org) //soon
- [HTML Templating]() //soon
- [BEM Methodology](https://en.bem.info) //soon
- [ITCSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) //soon
- [HMR](https://webpack.js.org/concepts/hot-module-replacement/) //soon
- [Caching](https://webpack.js.org/guides/caching/) //soon

## Structure of project

__./webpack-template/__ _- root of your project_  
&nbsp;&nbsp;&nbsp;╙ __dist/__ _- compiled project, result_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __favicon/__ _- all generated favicon files for most browsers/platforms are here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __js/__ _- compiled javascript_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __styles/__ _- compiled css_  
&nbsp;&nbsp;&nbsp;╙ __node_modules/__ _- all dependencies are here, don't touch this_  
&nbsp;&nbsp;&nbsp;╙ __src/__ _- source, this is where you need to write code_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __assets/__ _- fonts, images, other static files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __fonts/__ _- one font-family = one folder_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __fonts-master.css__ _- all fonts assemble to css_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __images/__ _- create folders and put images in here, structure will be saved_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __components/__ _- components/modules/blocks, header/footer/btn/social_link eg_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __js/__ _- javascript source files and folders in here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __modules/__ _- store your functionality to separate files in this folder and import them in the entry point file_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __vendor/__ _- vendor’s specific js_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __commons.js__ _- main javascript file, you should import all javascript into here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __static/__ _- files will be copied to root of dist folder (favicon/robots.txt/sitemap/etc)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __favicon.(png|svg)__ _- you need to put icon of your application here and name it 'favicon' (svg or png only)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __humans.txt__ _- humans.txt file, [learn more](http://humanstxt.org)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __robots.txt__ _- robots.txt file, [learn more](https://www.robotstxt.org)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __sitemap.xml__ _- your sitemap, [learn more](https://support.google.com/webmasters/answer/156184?hl=en)_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __styles/__ _- css files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __base/__ _- basic settings, generic styles_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __helpers/__ _- utilities/helpers files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __vendor/__ _- vendor’s specific css_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __style.css__ _- main css file, you should import all styles into here_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __views/__ _- layput files, html, templates, pages, etc_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __pages/__ _- pages files_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __index.html__ _- page template_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╙ __index.js__ _- webpack main entry point_  


## Scripts

- `build` Build/deploy/release project
- `dev` Start server with autocompile, use it for development
- `*dev` Same as `dev` but without server

- `clean:dist` Delete dist
- `clean:info` Delete info
- `clean:md` Delete all .md files in src 
- `clean:map` Delete all .map files in dist
- `clean` Cleanup all project (all clean tasks)

- `info:stats` Create stats.json, you may use it [as described in documentation](https://webpack.js.org/guides/code-splitting/#bundle-analysis)
- `info:browsers` Create browserslist.txt, there are all supported browsers [(edit .browserslistrc)](https://github.com/browserslist/browserslist)
- `info:versions` Create versions.txt, there are versions of Node.js, NPM, Webpack. To find out about versions: `npx <name> -v` or search it in package-lock.json
- `info` Runs all info tasks
