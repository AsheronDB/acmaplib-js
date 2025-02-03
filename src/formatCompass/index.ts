import { isValidPosition } from "../isValidPosition";
import { Position } from "../Position";
export const formatCompass = function (position: Position, options = {}) {
  if (!isValidPosition(position)) throw new Error("Invalid position");

  const x1 = (position.cellGlobalX - 1024) * 0.1 + 0.5;
  const y1 = (position.cellGlobalY - 1024) * 0.1 + 0.5;
  const x2 =
    x1 >= 0 ? Math.abs(x1).toFixed(1) + "E" : Math.abs(x1).toFixed(1) + "W";
  const y2 =
    y1 >= 0 ? Math.abs(y1).toFixed(1) + "N" : Math.abs(y1).toFixed(1) + "S";

  return [y1, x1];
};
