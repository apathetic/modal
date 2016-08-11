import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/modal.js',
  moduleName: 'Modal',
  plugins: [
    buble()
  ],

  targets: [
    { dest: 'dist/modal.cjs.js', format: 'cjs' },
    { dest: 'dist/modal.es6.js', format: 'es' },
    { dest: 'dist/modal.js', format: 'iife' }
  ]
};
