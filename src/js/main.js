(function () {

  require.config({
    baseUrl: 'js/',
    paths: {
      lodash: '../bower_components/lodash/lodash'
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
