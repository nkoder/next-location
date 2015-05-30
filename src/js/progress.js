define(function () {

  function updateTo(currentValue) {
    return {
      outOf: function (maxValue) {
        var asPercentage = (currentValue / maxValue) * 100;
        $('#progress-bar').css('width', asPercentage + '%');
      }
    };
  }

  return {
    updateTo: updateTo
  };
});
