(function () {

  require.config({
    baseUrl: 'js/',
    paths: {
      'lodash': '../bower_components/lodash/lodash',
      'local-storage': '../bower_components/store.js/store'
    },
    'packages': [
      {
        'name': 'edison',
        'location': '../bower_components/edisonjs/dist',
        'main': 'edison'
      }
    ]
  });

  jQuery(document).ready(function () {
    require(['routing'], function (routing) {
      routing.configure();
      if (!routing.isCurrentPageValid()) {
        routing.loadDefaultPage();
      }
    });
  });

})();
