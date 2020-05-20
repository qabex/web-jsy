#!/bin/sh

npm install --save-dev \
  rollup @rollup/plugin-node-resolve \
  rollup-plugin-jsy rollup-plugin-dgnotify \
  qsrv

echo "You may now remove '$0'"

