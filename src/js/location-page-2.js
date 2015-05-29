define(function (require) {

  var templates = require('templates');

  function loadInto(contentElementId, headerElementId) {
    templates
      .load('location-page-2.mst')
      .andInsertInto($(contentElementId));
  }

  return {
    loadInto: loadInto
  }
});
