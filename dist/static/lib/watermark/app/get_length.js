define(function (require, factory) {
  'use strict'
  var getLength = function (val) {
    var str = new String(val)
    var bytesCount = 0
    for (var i = 0, n = str.length; i < n; i++) {
      var c = str.charCodeAt(i)
      if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
        bytesCount += 1
      } else {
        bytesCount += 2
      }
    }
    return parseInt((bytesCount / 2).toFixed(0))
  }
  return getLength
})
