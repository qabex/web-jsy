# Cypress and JSY template

Using [cypress.io](https://cypress.io) end-to-end testing with
[JSY](https://jsy-lang.github.io) and [Rollup](https://rollupjs.org).


### Post-install

Please add these scripts to your package.json

```json
  "scripts": {
    "precypress": "npm link cypress",
    "cypress": "npx cypress@10.2.0 open --e2e -P ."
  }
```

