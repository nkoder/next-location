define(['templates', 'lodash', 'sanitize', 'progress'],
  function (templates, _, sanitize, progress) {

    function loadInto(contentElementId, location, actionOnLoaded) {
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
          var userAnswerElement = $('#user-answer');
          userAnswerElement.bind('input', onUserAnswerTry(userAnswerElement,
            function (hasUserFoundTheAnswer) {
              $('#go-next').attr('disabled', !hasUserFoundTheAnswer)
              userAnswerElement
                .closest('.form-group')
                .toggleClass('has-success', hasUserFoundTheAnswer);
            }));
          actionOnLoaded();
        });

      function onUserAnswerTry(userAnswerElement, callback) {
        return function () {
          var userAnswer = sanitize(userAnswerElement.val());
          var correctAnswers = _.map(location.task.correctAnswers, sanitize);
          var hasUserFoundTheAnswer = _.reduce(correctAnswers, function (foundTheAnswer, correctAnswer) {
            return foundTheAnswer || (correctAnswer === userAnswer);
          }, false);
          callback(hasUserFoundTheAnswer);
        }
      }
    }

    function sanitized(text) {
      return _.deburr(_.escape(text)).toLowerCase();
    }

    return {
      loadInto: loadInto
    }
  });
