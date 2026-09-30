import type { WorldNode } from "../types/game";

export const world: Record<string, WorldNode> = {
  "ROOM_01": {
    id: "ROOM_01",
    name: "ROOM 01",
    description: "It’s a small room.",
    children: [
      "TABLE",
      "WINDOW",
      "LAMP",
    ],
  },

  "ROOM_02": {
    id: "ROOM_02",
    name: "ROOM 02",
    description: "The room is empty.",
  },

  "BASEMENT": {
    id: "BASEMENT",
    name: "BASEMENT",
    description: "A dark basement.",
  },

  "ARCHIVE": {
    id: "ARCHIVE",
    name: "ARCHIVE",
    description: "Rows of old files.",
  },

  "ELEVATOR": {
    id: "ELEVATOR",
    name: "ELEVATOR",
    description: "An old elevator.",
  },

"TABLE": {
  id: "TABLE",
  name: "TABLE",
  description:
    "An old wooden table. There are several things on it.",
  children: [
    "NOTEBOOK",
    "PEN",
    "BOOK",
    "DRAWER",
  ],
},

  "WINDOW": {
    id: "WINDOW",
    name: "WINDOW",
    description:
      "The window looks outside. You can't see much.",
  },

  "LAMP": {
    id: "LAMP",
    name: "LAMP",
    description:
      "The lamp is old. It doesn't work.",
    clue: undefined,
  },

  "NOTEBOOK": {
    id: "NOTEBOOK",
    name: "NOTEBOOK",
    description:
      "A small black notebook.",
    children: [
      "NOTE_0317",
    ],
  },

  "PEN": {
    id: "PEN",
    name: "PEN",
    description:
      "A black pen. There is nothing unusual about it.",
  },

  "BOOK": {
    id: "BOOK",
    name: "BOOK",
    description:
      "An old book with no title.",
    children: [
      "PAGE_017",
    ],
  },

  "NOTE_0317": {
    id: "NOTE_0317",
    name: "NOTE_0317",
    description:
      "There is something written on the first page.",
    clue: "03:17",
  },

  "PAGE_017": {
    id: "PAGE_017",
    name: "PAGE_017",
    description:
      "Meet me at 03:17.",
    clue: "03:17",
  },
"DRAWER": {
  id: "DRAWER",
  name: "DRAWER",
  description:
    "A small drawer. It seems to have been left slightly open.",

  visibleWhen: {
    clues: ["03:17"],
  },

  lockedWhen: {
    exploredNodes: ["PAGE_017"],
  },
},
};