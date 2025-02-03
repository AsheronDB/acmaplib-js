// sum.test.js
import { expect, test } from "vitest";
import { parseGlobal } from "./index.js";
import { Position } from "../Position";

test("globalToPosition test", () => {
  const position = new Position(
    288620575,
    79.2045,
    145.96,
    42.005,
    -0.213365,
    0.0,
    0.0,
    -0.976973
  );

  expect(parseGlobal(3343.2045, 10129.96)).toBeInstanceOf(Position);
});
