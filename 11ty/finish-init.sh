#!/bin/sh

# "devDependencies": {
#   "@11ty/eleventy": "^2.0.1",
#   "@11ty/eleventy-plugin-vite": "^4.0.0",
#   "@jsy-lang/nodejs": "^0.0.9",
#   "rollup-plugin-dgnotify": "^0.1.8",
#   "rollup-plugin-jsy": "^1.8.1"
# },

npm install --save-dev \
  @jsy-lang/nodejs \
  rollup-plugin-jsy \
  rollup-plugin-dgnotify \
  @11ty/eleventy@2 \
  @11ty/eleventy-plugin-vite@4

echo "You may now remove '$0'"

