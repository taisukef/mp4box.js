import { MP4Box } from "./mp4box.all.min.js";

const MP4 = {
  async decodeSize(bin) {
    return new Promise((resolve) => {
      const mp4boxfile = MP4Box.createFile();
      mp4boxfile.onError = function(e) {
      };
      mp4boxfile.onReady = function(info) {
        const width = info.videoTracks[0].track_width;
        const height = info.videoTracks[0].track_height;
        const res = { width, height };
        resolve(res);
      };
      const ab = bin.buffer;
      ab.fileStart = 0;
      mp4boxfile.appendBuffer(ab);
      mp4boxfile.flush();
    });
  }
};

export { MP4 };
