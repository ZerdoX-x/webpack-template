# Web Front-End Project Template

This is my webpack template I use for each project

## Requirements

You only need [Node.js](https://nodejs.org) pre-installed and you’re good to go.

## Downloading and setup

1. `git clone https://github.com/ZerdoX-x/web-project-starter.git` Download template
2. `cd web-project-starter` Move to project directory
3. `npm run clean && npm i` Cleanup and install dependencies
4. `mv ../web-project-starter ../<project_name>` Rename root directory of project

## Structure of project

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
