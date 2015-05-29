define(function (require) {

  var Edison = require('edison');
  var locationPage1 = require('location-page');
  var locationPage2 = require('location-page-2');

  var edison = new Edison({
    'container': 'route-container'
  });

  var locationsSection = createSection('locations');
  createRoute(locationsSection, 'one', locationPage1);
  createRoute(locationsSection, 'two', locationPage2);

  function createSection(sectionName) {
    return edison.createSection({
      'name': sectionName,
      'callback': function () {
      }
    });
  }

  function createRoute(section, path, page) {
    section.createRoute({
      'name': path,
      'callback': function (param) {
        var routePath = "#!" + this.section.route.name + "/" + path;
        page.loadInto('#page-content', '#page-header', param);
      }
    });
  }

  function init() {
    edison.initRoutes();
  }

  return {
    init: init
  }
});
