define(['lodash'], function (_) {

  function sanitizeText(text) {
    return _.deburr(_.escape(text)).toLowerCase();
  }

  return {
    sanitizeText: sanitizeText
  };
});
