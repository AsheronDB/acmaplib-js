import { z } from "zod";
import {
  COMPASS_REGEXP_STRING,
  COMPASS_SOUTHWEST,
  BLOCK_LENGTH,
  CELL_LENGTH,
  CELL_SIDE,
} from "../constants";
import { Position } from "../Position";

const northSouthSchema = z.union([
  z.preprocess(
    (val) => {
      if (typeof val !== "string") return val; // Ensure val is a string before processing
      if (/E$/i.test(val) || /W$/i.test(val)) return null;
      if (/N$/i.test(val)) return Math.abs(parseFloat(val)); // North is positive
      if (/S$/i.test(val)) return -Math.abs(parseFloat(val)); // South is negative
    },
    z
      .number()
      .max(102)
      .min(-1 * COMPASS_SOUTHWEST)
  ),
  z
    .number()
    .max(102)
    .min(-1 * COMPASS_SOUTHWEST),
]);

const eastWestSchema = z.union([
  z.preprocess(
    (val) => {
      if (typeof val !== "string") return val; // Ensure val is a string before processing
      if (/N$/i.test(val) || /S$/i.test(val)) return null;
      if (/E$/i.test(val)) return Math.abs(parseFloat(val)); // East is positive
      if (/W$/i.test(val)) return -Math.abs(parseFloat(val)); // West is negative
    },
    z
      .number()
      .max(102)
      .min(-1 * COMPASS_SOUTHWEST)
  ),
  z
    .number()
    .max(102)
    .min(-1 * COMPASS_SOUTHWEST),
]);

export const parseCompass = (
  compassNorthSouth: string | number,
  compassEastWest: string | number
): Position | Error => {
  let northSouth: number;
  let eastWest: number;
  try {
    northSouth = northSouthSchema.parse(compassNorthSouth);
    eastWest = eastWestSchema.parse(compassEastWest);
  } catch (error) {
    console.error(error);
    throw new Error("Invalid input");
  }
  const ns = northSouth + COMPASS_SOUTHWEST;
  const ew = eastWest + COMPASS_SOUTHWEST;

  // 204 = map clicks across dereth
  // 2040 = number of cells across dereth
  // 24 = meters per cell
  //var globalPos = coordinates / 204 * 2040 * 24;

  const nsGlobal = ns * 240;
  const ewGlobal = ew * 240;

  const blockX = ewGlobal / BLOCK_LENGTH;
  const blockY = nsGlobal / BLOCK_LENGTH;

  const originX = ewGlobal % BLOCK_LENGTH;
  const originY = nsGlobal % BLOCK_LENGTH;

  const cellX = originX / CELL_LENGTH;
  const cellY = originY / CELL_LENGTH;

  const cell = cellX * CELL_SIDE + cellY + 1;

  const objCellId = (blockX << 24) | (blockY << 16) | cell;

  const pos = new Position(objCellId, originX, originY);

  return pos;
};
