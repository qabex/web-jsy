import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'
// import rpi_commonjs from '@rollup/plugin-commonjs'


const _cfg_ = {
  plugins: [
    rpi_dgnotify(),
    rpi_resolve(),  // Allow Node module resolution -- https://github.com/rollup/plugins/tree/master/packages/node-resolve#readme
    // rpi_commonjs(), // Allow CommonJS use -- https://github.com/rollup/plugins/tree/master/packages/commonjs#readme

    rpi_jsy({defines:{}}),
  ],
  external: [],
}

const _out_ = { sourcemap: true }

const configs = []
export default configs


add_jsy('index')

function add_jsy(src_name, opt={}) {
  configs.push({ ..._cfg_,
    input: `code/${src_name}.jsy`,
    output: [
      { ..._out_, file: `esm/${src_name}.mjs`, format: 'es' },
    ]})
}
