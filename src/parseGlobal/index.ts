import { CELL_LENGTH, CELL_SIDE, LANDBLOCK_WIDTH } from "../constants";
import { decToHex } from "../utils/decToHex";
import { Position } from "../Position";

const toObjCellId = (landblockX: number, landblockY: number, cell: number) => {
  if (!landblockX && !landblockY && !cell)
    throw new Error("Invalid parameters");
  return ((landblockX << 24) | (landblockY << 16) | cell) >>> 0;
};

export const parseGlobal = (
  globalX: number,
  globalY: number
): Position | Error => {
  // This only works for outdoor locations, figure out different handler for indoor global coords

  const originX = globalX % 192;
  const originY = globalY % 192;
  const cellX = Math.trunc(originX / CELL_LENGTH);
  const cellY = Math.trunc(originY / CELL_LENGTH);
  const cell = cellX * CELL_SIDE + cellY + 1;
  const blockX = Math.trunc(globalX / 192);
  const blockY = Math.trunc(globalY / 192);
  const objCellId = toObjCellId(blockX, blockY, cell);
  return new Position(objCellId, originX, originY);
};
