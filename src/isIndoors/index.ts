import type { Position } from "../classes";

export const isIndoors = function (position: Position): boolean {
  return (position.objCellId & 0xffff) >= 0x100;
};
