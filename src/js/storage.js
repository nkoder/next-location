define(['lodash', 'logger'], function (_, logger) {

  var data = {};

  function writeText(key, value) {
    data[key] = value;
    logger.logDebug('stored ( ' + key + ' -> ' + data[key] + ' )');
  }

  function readText(key) {
    logger.logDebug('read ( ' + key + ' -> ' + data[key] + ' )');
    return data[key];
  }

  function asText(value) {
    return value;
  }

  return {
    writeText: writeText,
    readText: readText
  };
});
