import { expect, test } from "vitest";
import { Position } from "./index.ts";

test("Position test", () => {
  const position = new Position(
    66079,
    182.661621,
    176.311523,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0
  );
  expect(position).toBeInstanceOf(Position);
});
