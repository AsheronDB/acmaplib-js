import { z } from "zod";
import {
  COMPASS_REGEXP_STRING,
  COMPASS_SOUTHWEST,
  BLOCK_LENGTH,
  CELL_LENGTH,
  CELL_SIDE,
} from "../constants";
import { Position } from "../Position";

const toObjCellId = (landblockX: number, landblockY: number, cell: number) => {
  if (!landblockX && !landblockY && !cell)
    throw new Error("Invalid parameters");
  return ((landblockX << 24) | (landblockY << 16) | cell) >>> 0;
};

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

  console.log(northSouth);
  console.log(eastWest);

  const globalX = (eastWest + COMPASS_SOUTHWEST) * 240;
  const globalY = (northSouth + COMPASS_SOUTHWEST) * 240;
  const blockX = Math.trunc(globalX / BLOCK_LENGTH);
  const blockY = Math.trunc(globalY / BLOCK_LENGTH);
  const originX = globalX % BLOCK_LENGTH;
  const originY = globalY % BLOCK_LENGTH;
  const cellX = Math.trunc(originX / CELL_LENGTH);
  const cellY = Math.trunc(originY / CELL_LENGTH);
  const cell = cellX * CELL_SIDE + cellY + 1;
  const objCellId = toObjCellId(blockX, blockY, cell);

  console.log("objCellId");
  console.log(objCellId);
  const pos = new Position(objCellId, originX, originY);

  console.log(pos);
  console.log(pos.landblock);

  return pos;

  3014524992;
};
