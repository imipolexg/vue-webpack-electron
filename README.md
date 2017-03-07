# vue-webpack-electron

> A dead-simple setup for building Electron apps with Vue.js

> This template is only Vue 2.0 compatible.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

It was forked from [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) and the directory layout is pretty much the same as with that template.

``` bash
$ npm install -g vue-cli
$ vue init imipolexg/vue-webpack-electron my-project
$ cd my-project
$ npm install
$ npm run build && npm run electron
```

## What's in the Box?

This is a pretty bare bones starter kit. The other vue + electron templates out there had more bells and whistles (like live reload), but as a consequence they lost support for important electron features, like "cross-origin" HTTP requests and filesystem access. Here you can do `import os from 'os'` or `import fs from 'fs'` and work with electron the way it should be, as a desktop app, not a webapp.

I plan on devising a hot-reload system in the future, but it's not there right now. If anyone knows of an existing package that will accomplish this, feel free to submit a pull request.

### Fork it!

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
