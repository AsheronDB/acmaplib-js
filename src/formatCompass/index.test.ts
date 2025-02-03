// sum.test.js
import { expect, test } from "vitest";
import { formatCompass } from "./index.ts";
import { Position } from "../Position";

test("formatCompass test", () => {
  const position = new Position(
    288620575,
    79.2045,
    145.96,
    42.005,
    -0.213365,
    0.0,
    0.0,
    -0.976973
  ); // Ulgrim the Unpleasant

  console.log(position.globalX);
  console.log(position.globalY);
  expect(formatCompass(position)).toStrictEqual([-59.7, -88]);
});
