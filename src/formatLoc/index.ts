import type { Position } from "../classes";
export const formatLoc = function (position: Position): string {
  if (!position) throw new Error("No position");
  return `${position.objCellIdHex} [${position.originX} ${position.originY} ${position.originZ}] ${position.angleW} ${position.angleX} ${position.angleY} ${position.angleZ}`;
};
