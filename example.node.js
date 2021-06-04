const buffer2arrayBuffer = (buffer) => {
  const ab = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buffer.length; i++) {
      view[i] = buffer[i];
  }
  return ab;
};

var MP4Box = require('mp4box'); // Or whatever import method you prefer.
const fs = require('fs');
const mp4boxfile = MP4Box.createFile();
mp4boxfile.onError = function(e) {
};
mp4boxfile.onReady = function(info) {
  console.log(info);
  const width = info.videoTracks[0].track_width;
  const height = info.videoTracks[0].track_height;
  const res = { width, height };
  console.log(res);
};
const ab = buffer2arrayBuffer(fs.readFileSync('screenshot.mp4'));
ab.fileStart = 0;
console.log(ab);
mp4boxfile.appendBuffer(ab);
mp4boxfile.flush();
