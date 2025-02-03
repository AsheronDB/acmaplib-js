import { expect, test } from "vitest";
import { isValidPosition } from "./index.ts";
import { Position } from "../Position";

test("isValidPosition Test", () => {
  const position = new Position(3332964718); // Weapon Imbue Vendor Landblock Instance
  expect(isValidPosition(position)).toBe(true);
});
