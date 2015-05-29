define(function () {

  function loadTemplate(templatePath) {

    function loadTemplateIntoContainer(callback, injectIntoContainer) {
      var deferredTemplateLoad = $.Deferred();
      $.get('templates/' + templatePath)
        .done(function (template) {
          var renderedTemplate = Mustache.render(template);
          injectIntoContainer(renderedTemplate);
          deferredTemplateLoad.resolve();
        }).fail(function () {
          deferredTemplateLoad.reject();
        });
      return deferredTemplateLoad;
    }

    return {
      andInsertInto: function (container, callback) {
        return loadTemplateIntoContainer(callback, function (renderedTemplate) {
          container.html(renderedTemplate)
        });
      },
      andReplace: function (container, callback) {
        return loadTemplateIntoContainer(callback, function (renderedTemplate) {
          container.replaceWith(renderedTemplate)
        });
      }
    }
  }

  return {
    load: loadTemplate
  }
});
