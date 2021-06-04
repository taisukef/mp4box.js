import { MP4Box } from "./mp4box.all.min.js";

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
const ab = Deno.readFileSync('screenshot.mp4').buffer;
console.log(ab);
ab.fileStart = 0;
console.log(ab);
mp4boxfile.appendBuffer(ab);
mp4boxfile.flush();
