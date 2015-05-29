define(['lodash'], function (_) {

  function sanitize(text) {
    return _.deburr(_.escape(text)).toLowerCase();
  }

  return sanitize;
});
