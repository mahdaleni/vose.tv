'use strict';

exports.default = {
  views: {
    any: ['./src/views/**/*.html'], // Files to watch
    src: ['./src/views/**/*.html'], // File(s) to source
    base: './src/views/', // Files to watch
    dest: './.public/', // Where to put transformed file(s)
  },
  styles: {
    any: ['./src/styles/**/*.+(scss|css)'], // Files to watch
    src: ['./src/styles/admin.+(scss|css)', './src/styles/client.+(scss|css)'], // File(s) to source
    base: './src/styles/', // Files to watch
    dest: './.public/', // Where to put transformed file(s)
  },
  scripts: {
    any: ['./src/client/**/*.js'], // Files to watch
    src: ['./src/client/index.js'], // File(s) to source
    base: './src/client/', // Files to watch
    dest: './.public/', // Where to put transformed file(s)
  },
  img: {
    any: ['./src/img/**/*'], // Files to watch
    src: ['./src/img/**/*'], // File(s) to source
    dest: './.public/', // Where to put transformed file(s)
  },
  assets: {
    any: ['./src/assets/**/*'], // Files to watch
    src: ['./src/assets/**/*'], // File(s) to source
    dest: './.public/', // Where to put transformed file(s)
  },
  content: {
    any: ['./content/**.md'], // Files to watch
    src: ['./content/**.md'], // File(s) to source
    dest: './src/scripts/content/', // Where to put transformed file(s)
  },
};
