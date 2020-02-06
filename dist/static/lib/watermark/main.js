require.config({
  // baseUrl: "js",

  paths: {
    '$cropper': 'app/cropper',
    'cropper': 'lib/cropper',
    'compress': 'app/compress',
    'watermark': 'app/watermark',
    'isArray': 'app/is_array',
    'getLength': 'app/get_length',
    'base64toBlob': 'app/base64_blob',
    'exif': 'lib/exif',
    'rotateDraw': 'app/rotate_draw',
    'gif': 'lib/gif'
  },

  shim: {
    'cropper': {
      // deps: ['base64toBlob'],
      exports: 'cropper'
    }
  }
})

require(['compress', 'watermark', '$cropper', 'gif', 'getLength', 'base64toBlob'], function (compress, watermark, myCropper, GIF, getLength, base64toBlob) {
  $cropper = myCropper
  $compress = compress
  $watermark = watermark
  window.GIF = GIF
  $getLength = getLength
  $base64toBlob = base64toBlob
})
