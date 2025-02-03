# ACMapLib

Helper functions for managing game position data for [Asheron's Call](https://en.wikipedia.org/wiki/Asheron%27s_Call).

## Getting started

### Installation

```
npm install @asherondb/acmaplib
```

### Basic Usage

#### Create position instance

```
import { Position } from "@asherondb/acmaplib";
const position = new Position(288620575, 79.2045, 145.96, 42.005);
```

#### Create position instance from compass coordinates

```
import { parseCompass } from "@asherondb/acmaplib";
const position = parseCompass("33.3N", "56.6E"); // Arwic
```

## Documentation

### Parsing Helpers

#### parseCompass

```
const position = parseCompass("33.3N", "56.6E");
```

#### parseLoc

```
const position = parseLoc("0xFEFE0040 [182.661621 176.311523 0.000000] 1.000000 0.000000 0.000000 0.000000");
```

#### parseGlobal

```
const position = parseGlobal(3343.2045, 10129.96);
```

#### parseGlobal

```
const position = parseGlobal(3343.2045, 10129.96);
```

### Formatting Helpers

#### formatCompass

```
const compass = formatCompass(position);
```

#### formatLoc

```
const loc = formatLoc(position);
```

### Misc Helpers

#### isIndoors

```
const positionIsIndoors = isIndoors(position);
```

#### isValidPosition

```
const positionIsValid = isValidPosition(position);
```

## Credits

- [@jovrtn](https://www.github.com/jovrtn)
- [ACEmulator Team](https://emulator.ac)
