define(function (require) {

  var templates = require('templates');

  function loadInto(contentElementId, location) {
    templates
      .load('location-page.mst', location)
      .andInsertInto($(contentElementId));
  }

  return {
    loadInto: loadInto
  }
});
