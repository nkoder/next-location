define(['templates', 'lodash', 'sanitizer', 'memory', 'progress'],
  function (templates, _, sanitizer, memory, progress) {

    function loadInto(contentElementId, location) {
      if (!!location.staticText) {
        loadPageWithStaticText();
      } else {
        loadPageWithTask();
      }

      function loadPageWithStaticText() {
        templates
          .load('location-page.mst', location)
          .andInsertInto($(contentElementId))
          .then(function () {
            enableNextPage();
            updateProgress();
          });
      }

      function loadPageWithTask() {
        templates
          .load('location-page.mst', location)
          .andInsertInto($(contentElementId))
          .then(function () {
            return templates
              .load('task-form.mst', location)
              .andInsertInto($('#task-tab'));
          })
          .then(function () {
            return templates
              .load('map.mst')
              .andInsertInto($('#map-tab'));
          })
          .then(function () {
            if (!!location.geocacheContentFile) {
              templates
                .load(location.geocacheContentFile)
                .andInsertInto($('#geocache-tab'));
            }
          })
          .then(function () {
            globalGoogleMapsHelper.loadGoogleMapsFor(
              location.googleMapsCoordinate.latitude,
              location.googleMapsCoordinate.longitude);
            userAnswerElement().bind('input', onUserAnswerChangedAction);
            userAnswerElement().val(memory.read(location.id));
            onUserAnswerChangedAction();
            updateProgress();
          });
      }

      function onUserAnswerChangedAction() {
        memory.write(location.id, userAnswerElement().val());
        var userAnswer = sanitizer.sanitizeText(userAnswerElement().val());
        var correctAnswers = _.map(location.task.correctAnswers, sanitizer.sanitizeText);
        var hasUserFoundTheAnswer = _.reduce(correctAnswers, function (foundTheAnswer, correctAnswer) {
          return foundTheAnswer || (correctAnswer === userAnswer);
        }, false);
        updatePageAccordingToAnswerCorrectness(hasUserFoundTheAnswer);
      }

      function updateProgress() {
        progress.updateTo(location.progress);
      }
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
