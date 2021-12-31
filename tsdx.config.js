const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const copy = require('rollup-plugin-copy');


module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        sourceMap: true,
        inject: true,
        extract: false,
      }),
      copy({
        targets: [
          { src: 'src/sass/**/*', dest: 'dist/sass' }
        ],
        hook: 'writeBundle'
      })
    );
    return config;
  },
};
