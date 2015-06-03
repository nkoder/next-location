define(['templates', 'progress', 'navigation', 'map/map-tab', 'task/task-tab', 'geocache/geocache-tab'],
  function (templates, progress, navigation, mapTab, taskTab, geocacheTab) {

    function loadInto(element, location) {
      $.when(
        templates.load('location-page.mst', location)
      ).then(function (html) {
          element.html(html);
          progress.updateTo(location.progress);
          if (!!location.staticText) {
            navigation.enableNextPage();
          } else {
            mapTab.loadInto($('#map-tab'), location);
            taskTab.loadInto($('#task-tab'), location);
            if (!!location.geocacheContentFile) {
              geocacheTab.loadInto($('#geocache-tab'), location);
            }
          }
        });
    }

    return {
      loadInto: loadInto
    }
  });
