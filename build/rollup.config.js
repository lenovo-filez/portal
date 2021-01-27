import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  external: ['vue'],
  output: [
    {
      file: 'dist/portal.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __IS_DEVELOPMENT__: process.env.NODE_ENV !== 'production',
    }),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
}
