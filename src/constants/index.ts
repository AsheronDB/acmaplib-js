export const LANDBLOCK_WIDTH = 192;
export const TILE_SIZE = 8;
export const LOCAL_UNITS = 24;

export const GLOBAL_COORDS_MAX = 48960;
export const GLOBAL_COORDS_MIN = 0;

export const BLOCK_LENGTH = 192;

export const CELL_SIDE = 8;
export const CELL_LENGTH = 24;
export const RADAR_SOUTHWEST = 101.95;
export const RADAR_NORTHEAST = 102;

export const COMPASS_SOUTHWEST = 101.95;
export const COMPASS_NORTHEAST = 102;

export const COMPASS_REGEXP_STRING =
  /^(?<y>-?\d+(?:\.\d+)?)[nsNS],?\s?(?<x>-?\d+(?:\.\d+)?)[ewEW]$/;

export const LOC_STRING_REGEXP_STRING =
  /^(?<landcell>0x[0-9A-F]{8}) \[(?<originX>-?\d+(?:\.\d+)?) (?<originY>-?\d+(?:\.\d+)?) (?<originZ>-?\d+(?:\.\d+)?)\] (?<angleW>-?\d+(?:\.\d+)?) (?<angleX>-?\d+(?:\.\d+)?) (?<angleY>-?\d+(?:\.\d+)?) (?<angleZ>-?\d+(?:\.\d+)?)$/;

// export const LOC_STRING_REGEXP = new RegExp(
//     /^(?:Your location is: )?(0[xX][0-9a-fA-F]+) \[([+-]?[0-9]+\.?[0-9]*|\.[0-9]+) ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+) ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+)\] ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+) ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+) ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+) ([+-]?[0-9]+\.?[0-9]*|\.[0-9]+)$/,
//     "g"
// );
export const RADAR_COORDS_REGEXP = new RegExp(
  /^(\d+(?:\.\d+)?[ns])(?:,\s{0,1}|\s{1})(\d+(?:\.\d+)?[ew])$/,
  "i"
);
