import buble from 'rollup-plugin-buble';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/modal.js',
  moduleName: 'Modal',
  plugins: [
    buble(),
    // uglify()
  ],

  targets: [
    { dest: 'dist/modal.cjs.js', format: 'cjs' },
    { dest: 'dist/modal.es6.js', format: 'es' },
    { dest: 'dist/modal.browser.js', format: 'iife' }
  ]
};
