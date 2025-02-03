import { LOC_STRING_REGEXP_STRING } from "../constants";
import { Position } from "../Position";

export const parseLoc = (loc: string): Position | Error => {
  const matches = new RegExp(LOC_STRING_REGEXP_STRING, "g").exec(loc);

  if (!matches) {
    return new Error("not valid loc match");
  }

  const groups = matches.groups;

  if (!groups) {
    return new Error("no groups");
  }

  if (!groups.landcell) {
    return new Error("no landcell");
  }

  const position = new Position(
    Number(groups.landcell),
    Number(groups?.originX),
    Number(groups?.originY),
    Number(groups?.originZ),
    Number(groups?.angleW),
    Number(groups?.angleX),
    Number(groups?.angleY),
    Number(groups?.angleZ)
  );

  console.log(position);

  return position;
};
