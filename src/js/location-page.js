define(function (require) {

  var templates = require('templates');

  function loadInto(contentElementId, location) {
    templates
      .load('location-page.mst', location)
      .andInsertInto($(contentElementId))
      .then(function () {
        if (!!location.geocacheContentFile) {
          templates
            .load(location.geocacheContentFile)
            .andInsertInto($('#geocache-tab'));
        }
      });
  }

  return {
    loadInto: loadInto
  }
});
