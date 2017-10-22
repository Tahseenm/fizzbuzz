import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'


const env = process.env.NODE_ENV

const config = {
  input: 'src/index.js',
  output: {
    file: env === 'production' ? 'dist/fizzbuzz.min.js' : 'dist/fizzbuzz.js',
    format: 'umd',
  },

  name: 'FizzBuzz',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
  ],
}

if (env === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }))
}


export default config
