// sum.test.js
import { expect, test } from "vitest";
import { parseLoc } from "./index.js";
import { Position } from "../Position";

test("parseLoc", () => {
  const testLoc = `0xFEFE0040 [182.661621 176.311523 0.000000] 1.000000 0.000000 0.000000 0.000000`;
  const testPosition = new Position(
    4278059072,
    182.661621,
    176.311523,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0
  );

  console.log(testPosition);
  console.log(testPosition.objCellIdHex);
  console.log("LANDBLOCK HEX");
  console.log(testPosition.landblockHex);
  console.log(testPosition.landblockX);
  console.log(testPosition.landblockY);
  console.log(testPosition.landblock);

  console.log("global x", testPosition.globalX);
  console.log("global y ", testPosition.globalY);
  expect(parseLoc(testLoc)).toStrictEqual(testPosition);
});
