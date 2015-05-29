define(function (require) {

  var templates = require('templates');

  function loadInto(contentElementId, headerElementId) {
    templates
      .load('location-page.mst')
      .andInsertInto($(contentElementId));
  }

  return {
    loadInto: loadInto
  }
});
