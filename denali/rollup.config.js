import {builtinModules} from 'module'
import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'
// import { terser as rpi_terser } from 'rollup-plugin-terser'


const _rpis_ = (defines, ...args) => [
  rpi_jsy({defines}),
  rpi_resolve(),
  ...args,
  rpi_dgnotify()]


const _cfg_ = {
  external: id => (
       /^\w*:|^\/cdn\//.test(id)
    || builtinModules.includes(id)
    ),
  plugins: _rpis_({}) }


// Allow Minification -- https://github.com/TrySound/rollup-plugin-terser
const _cfg_min_ = 'undefined'===typeof rpi_terser ? null
  : { ... _cfg_, plugins: [ ... _cfg_.plugins, rpi_terser() ]}


export default [
  ... add_jsy('index'),
]



function * add_jsy(src_name, opt={}) {
  const input = `code/${src_name}${opt.ext || '.jsy'}`

  yield { ..._cfg_, input, output: [
      { file: `root/esm/${src_name}.js`, format: 'es', sourcemap: true },
      //{ file: `esm/${src_name}.js`, format: 'es', sourcemap: true },
      //{ file: `umd/${src_name}.js`, format: 'umd', name: opt.name || src_name, sourcemap: true },
    ].filter(Boolean)}

  if (_cfg_min_)
    yield { ... _cfg_min_, input, output: [
        { file: `root/esm/${src_name}.min.js`, format: 'es', sourcemap: false },
        //{ file: `esm/${src_name}.min.js`, format: 'es', sourcemap: false },
        //{ file: `umd/${src_name}.min.js`, format: 'umd', name: opt.name || src_name, sourcemap: false },
      ].filter(Boolean)}
}
