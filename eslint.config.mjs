import config from 'eslint-config-standard';

export default [
  ...[].concat(config),  
  {
    ignores: [
      './dist/bundle.js',
      './node_modules/',
      './public/',
      './package-lock.json',
      './package.json'
    ],
  }
];