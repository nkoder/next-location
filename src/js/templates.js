define(function () {

  function loadTemplate(templatePath, data) {

    function loadTemplateIntoContainer(injectIntoContainer) {
      var deferredTemplateLoad = $.Deferred();
      $.get('templates/' + templatePath)
        .done(function (template) {
          var renderedTemplate = Mustache.render(template, data);
          injectIntoContainer(renderedTemplate);
          deferredTemplateLoad.resolve();
        }).fail(function () {
          deferredTemplateLoad.reject();
        });
      return deferredTemplateLoad;
    }

    return {
      andInsertInto: function (container) {
        return loadTemplateIntoContainer(function (renderedTemplate) {
          container.html(renderedTemplate)
        });
      },
      andReplace: function (container) {
        return loadTemplateIntoContainer(function (renderedTemplate) {
          container.replaceWith(renderedTemplate)
        });
      }
    }
  }

  return {
    load: loadTemplate
  }
});
