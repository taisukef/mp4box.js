import * as t from "https://deno.land/std/testing/asserts.ts";
import { MP4 } from "./MP4.js";

Deno.test("decodeSize", async () => {
  const bin = Deno.readFileSync('screenshot.mp4');
  const size = await MP4.decodeSize(bin);
  t.assertEquals(size, { width: 1000, height: 1326 });
});
