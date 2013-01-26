/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

var getPhotos = function(callback) {
  var files = [
    'front.png',
    'side.png',
    '200701.png',
    '200702.png',
    '200703.png',
    '200704.png',
    '200705.png',
    '200706.png',
    '200707.png',
    '200708.png',
    '200709.png',
    '200710.png',
    '200711.png',
    '200712.png',
    '200801.png',
    '200802.png',
    '200803.png',
    '200804.png',
    '200805.png',
    '200806.png',
    '200807.png',
    '200808.png',
    '200809.png',
    '200810.png',
    '200811.png',
    '200812.png',
    '200901.png',
    '200902.png',
    '200903.png',
    '200904.png',
    '200905.png',
    '200906.png',
    '200907.png',
    '200908.png',
    '200909.png',
    '200910.png',
    '200911.png',
    '200912.png',
  ];

  var photos = [];
  for (var index in files) {
    var filename = files[index];
    photos.push({
      name: filename,
      date: index,
      metadata: {
        thumbnail: 'Resources/' + filename
      }
    });
  }

  setTimeout(function() {
    callback(photos);
  }, 100/*ms*/);
};
