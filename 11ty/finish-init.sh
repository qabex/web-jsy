#!/bin/sh

npm install --save-dev \
  rollup @rollup/plugin-node-resolve \
  rollup-plugin-terser \
  rollup-plugin-jsy rollup-plugin-dgnotify \
  @jsy-lang/nodejs \
  @11ty/eleventy

niv init -b release-22.05 --nixpkgs NixOS/nixpkgs

echo "You may now remove '$0'"

