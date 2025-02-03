// sum.test.js
import { expect, test } from "vitest";
import { parseCompass } from "./index.ts";
import { Position } from "../Position";

test("parseCompass test", () => {
  expect(parseCompass(10, 10)).toBeInstanceOf(Position);
});
