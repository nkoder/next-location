define(['templates', 'lodash', 'sanitizer', 'memory', 'progress', 'map/map-tab'],
  function (templates, _, sanitizer, memory, progress, mapTab) {

    function loadInto(element, location) {
      $.when(
        templates.load('location-page.mst', location)
      ).then(function (html) {
          element.html(html);
          progress.updateTo(location.progress);
          if (!!location.staticText) {
            enableNextPage();
          } else {
            mapTab.loadInto($('#map-tab'), location);
            loadTaskTabFor(location);
            if (!!location.geocacheContentFile) {
              loadGeocacheTabFor(location);
            }
          }
        });
    }

    function loadTaskTabFor(location) {
      $.when(
        templates.load('task-form.mst', location)
      ).then(function (html) {
          $('#task-tab').html(html);
          userAnswerElement().bind('input', onUserAnswerChangedAction);
          userAnswerElement().val(memory.read(location.id));
          onUserAnswerChangedAction();
        });

      function onUserAnswerChangedAction() {
        memory.write(location.id, userAnswerElement().val());
        var userAnswer = sanitizer.sanitizeText(userAnswerElement().val());
        var correctAnswers = _.map(location.task.correctAnswers, sanitizer.sanitizeText);
        var hasUserFoundTheAnswer = _.reduce(correctAnswers, function (foundTheAnswer, correctAnswer) {
          return foundTheAnswer || (correctAnswer === userAnswer);
        }, false);
        updatePageAccordingToAnswerCorrectness(hasUserFoundTheAnswer);
      }
    }

    function loadGeocacheTabFor(location) {
      $.when(
        templates.load(location.geocacheContentFile)
      ).then(function (html) {
          $('#geocache-tab').html(html)
        });
    }

    function updatePageAccordingToAnswerCorrectness(hasUserFoundTheAnswer) {
      if (hasUserFoundTheAnswer) {
        enableNextPage();
      } else {
        disableNextPage();
      }
      $('#go-next').attr('disabled', !hasUserFoundTheAnswer);
      $('#user-answer')
        .closest('.form-group')
        .toggleClass('has-success', hasUserFoundTheAnswer);
    }

    function enableNextPage() {
      $('#go-next').attr('disabled', false);
    }

    function disableNextPage() {
      $('#go-next').attr('disabled', true);
    }

    function userAnswerElement() {
      return $('#user-answer');
    }

    return {
      loadInto: loadInto
    }
  });
