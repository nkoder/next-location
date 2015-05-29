require.config({
  baseUrl: 'js/',
  paths: {
    moment: '../bower_components/moment/moment',
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
