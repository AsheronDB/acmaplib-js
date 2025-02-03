import { expect, test } from "vitest";
import { isIndoors } from "./index";
import { Position } from "../Position";

test("isIndoors Test", () => {
  const position = new Position(3332964718); // Weapon Imbue Vendor Landblock Instance
  expect(isIndoors(position)).toBe(true);
});
