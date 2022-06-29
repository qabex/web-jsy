#!/bin/sh

npm install --save-dev \
  rollup @rollup/plugin-node-resolve \
  rollup-plugin-jsy cypress-rollup-preprocessor

cat << EOC

Please add these scripts to your package.json

  "scripts": {
    "precypress": "npm link cypress",
    "cypress": "npx cypress@10.2.0 open --e2e -P ."
  }

EOC

echo "You may now remove '$0'"

