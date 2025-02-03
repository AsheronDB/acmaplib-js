import { expect, test } from "vitest";
import { formatLoc } from "./index.ts";
import { Position } from "../Position";

test("formatLoc", () => {
  const position = new Position(
    4278059072,
    182.661621,
    176.311523,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0
  );

  const loc = `0xFEFE0040 [182.661621 176.311523 0] 1 0 0 0`;
  expect(formatLoc(position)).toBe(loc);
});
