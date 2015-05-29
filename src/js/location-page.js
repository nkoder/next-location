define(['templates', 'lodash', 'sanitize'],
  function (templates, _, sanitize) {

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
        })
        .then(function () {
          var userAnswerElement = $('#user-answer');
          userAnswerElement.bind('input', onUserAnswerTry(userAnswerElement,
            function (hasUserFoundTheAnswer) {
              $('#go-next').prop('disabled', !hasUserFoundTheAnswer)
            }));
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
