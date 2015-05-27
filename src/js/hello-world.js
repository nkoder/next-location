define(function () {

  function performOn(selector) {
    $(selector).html("Hello World!");
  }

  return {
    performOn: performOn
  };
});
