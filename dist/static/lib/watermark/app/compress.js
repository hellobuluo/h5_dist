define([
  'isArray',
  'base64toBlob',
  'rotateDraw'
], function (isArray, base64toBlob, imgRotate) {
  'use strict'
  var params
  var Compress = function (obj) {
    return new Compress.prototype.init(obj)
  }
  Compress.prototype = {
    init: function (obj) {
      params = obj
      switch (isArray(params.src)) {
        case true:
          var dispose = this.dispose
          var a = 0
          var result = []
          var blob_result = []
          thumb()
          function thumb () {
            if (params.src[a]) {
              dispose(params.src[a], function (base64) {
                a++
                result.push(base64)
                thumb()
              }, function (blob) {
                blob_result.push(blob)
              })
            } else {
              if (params.ok) params.ok(result)
              setTimeout(function () {
                if (params.toBlob) params.toBlob(blob_result)
              }, 300)
            }
          }
          break
        case false:
          this.dispose(params.src, function (base64) {
            if (params.ok) params.ok(base64)
          }, function (blob) {
            if (params.toBlob) params.toBlob(blob)
          })
          break
      }
    },
    dispose: function (path, result, toBlob) {
      var img = new Image()
      img.addEventListener('load', function () {
        var that = this
        var w = that.width
        var h = that.height
        var scale = w / h
        w = params.width || w
        h = params.height || (w / scale)
        var scaleCount = Math.round(0.0014 * w)
        if (scaleCount >= 1 && !params.original) {
          if (scaleCount <= 2) {
            w = parseInt(w / 1.5)
            h = parseInt(h / 1.5)
          } else if (scaleCount == 3) {
            w = parseInt(w / 2)
            h = parseInt(h / 2)
          } else {
            w = parseInt(w / (scaleCount - 1.5))
            h = parseInt(h / (scaleCount - 1.5))
          }
        }
        var quality = 0.5 // 默认图片质量
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        var anw = document.createAttribute('width')
        anw.nodeValue = w
        var anh = document.createAttribute('height')
        anh.nodeValue = h
        canvas.setAttributeNode(anw)
        canvas.setAttributeNode(anh)
        imgRotate(that, canvas, {
          width: w,
          height: h
        })
        if (params.quality && params.quality <= 99 && params.quality > 0) {
          quality = params.quality
        }

        var base64 = canvas.toDataURL('image/jpeg', quality * 0.01)
        if (result) result(base64)
        if (toBlob) {
          try {
            canvas.toBlob(function (blob) {
              toBlob(blob)
            })
          } catch (error) {
            toBlob(base64toBlob(base64))
          }
        }
      }, false)
      img.crossOrigin = 'Anonymous'
      img.src = path
    }
  }
  Compress.prototype.init.prototype = Compress.prototype
  return Compress
})
