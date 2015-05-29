define(['edison', 'location-page', 'locations', 'lodash'],
  function (Edison, locationPage, locations, _) {

    function configure() {

      var edison = new Edison({
        'container': 'dummy-route-container'
      });

      var section = createSection('locations');
      _.forEach(locations.all(), function (location) {
        section.createRoute({
          'name': location.id,
          'callback': function () {
            locationPage.loadInto('#page-content', location);
          }
        });
      });

      edison.initRoutes();

      function createSection(sectionPath) {
        return edison.createSection({
          'name': sectionPath,
          'callback': function () {
          }
        });
      }

    }

    function loadDefaultPage() {
      window.location.href = '#!locations/' + locations.defaultLocation().id
    }

    return {
      configure: configure,
      loadDefaultPage: loadDefaultPage
    }
  });
