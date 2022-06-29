import { defineConfig } from 'cypress'
import rpi_jsy from 'rollup-plugin-jsy'
import rpi_resolve from '@rollup/plugin-node-resolve'
import cypress_rollup from 'cypress-rollup-preprocessor'


const _rpi_cfg_ = {
  plugins: [ rpi_jsy(), rpi_resolve() ],
}

export default defineConfig({e2e: {
  baseUrl: 'http://127.0.0.1:8090',
  specPattern: 'cypress/e2e/*.cy.{js,jsy}',
  includeShadowDom: true,

  setupNodeEvents(on, config) {
    on('file:preprocessor',
      cypress_rollup({inputOptions: _rpi_cfg_}))
  },
}})

