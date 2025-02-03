import { LANDBLOCK_WIDTH, CELL_SIDE } from "../constants/index.ts";

export class Position {
  objCellId: number;
  originX: number;
  originY: number;
  originZ: number;
  angleW: number;
  angleX: number;
  angleY: number;
  angleZ: number;
  constructor(
    objCellId: number,
    originX: number = 0,
    originY: number = 0,
    originZ: number = 0,
    angleW: number = 1,
    angleX: number = 0,
    angleY: number = 0,
    angleZ: number = 0
  ) {
    if (!objCellId) throw new Error("No objCellId provided");
    // TODO: Validate schema
    // Cell ID
    this.objCellId = objCellId;
    // Frame
    this.originX = originX;
    this.originY = originY;
    this.originZ = originZ;
    this.angleW = angleW;
    this.angleX = angleX;
    this.angleY = angleY;
    this.angleZ = angleZ;
  }
  get landblock() {
    return this.objCellId >>> 16;
  }
  get landblockX() {
    return this.objCellId >>> 24;
  }
  get landblockY() {
    return (this.objCellId >>> 16) & 0xff;
  }
  get objCellIdHex() {
    return `0x${this.objCellId.toString(16).padStart(8, "0").toUpperCase()}`;
  }
  get landblockHex() {
    return this.objCellIdHex.slice(2, 6);
  }
  get cellHex() {
    return this.objCellIdHex.slice(-4);
  }
  get cellX() {
    return (this.objCellId & 0xffff) / CELL_SIDE;
  }
  get cellY() {
    return (this.objCellId & 0xffff) % CELL_SIDE;
  }
  get cellGlobalX() {
    return 8 * this.landblockX + Math.floor(this.originX / 24);
  }
  get cellGlobalY() {
    return 8 * this.landblockY + Math.floor(this.originY / 24);
  }
  get globalX() {
    return this.landblockX * LANDBLOCK_WIDTH + this.originX;
  }
  get globalY() {
    return this.landblockY * LANDBLOCK_WIDTH + this.originY;
  }
}
