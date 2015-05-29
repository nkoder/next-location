require.config({
  baseUrl: 'js/',
  paths: {
    lodash: '../bower_components/lodash/lodash',
    logger: 'console-logger'
  },
  'packages': [
    {
      'name': 'edison',
      'location': '../bower_components/edisonjs/dist/',
      'main': 'edison'
    }
  ]
});
