import { MP4 } from "https://taisukef.github.io/mp4boxjs/MP4.js";
const bin = Deno.readFileSync('screenshot.mp4');
const size = await MP4.decodeSize(bin);
console.log(size);
