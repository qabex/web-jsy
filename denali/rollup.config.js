import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'


const _cfg_ = {
  plugins: [
    rpi_dgnotify(),
    rpi_resolve(),  // Allow Node module resolution -- https://github.com/rollup/plugins/tree/master/packages/node-resolve#readme

    rpi_jsy({defines:{}}),
  ],
  external: [],
}

export default [
  ... add_jsy('index'),
]


function add_jsy(src_name, opt={}) {
  return [
    { ..._cfg_, input: `code/${src_name}.jsy`,
      output: { file: `esm/${src_name}.mjs`, format: 'es', sourcemap: true }},
  ]
}
