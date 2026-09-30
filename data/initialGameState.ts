import type { GameState } from "../types/game";

export const initialGameState: GameState = {
player: {
  key: null,
  navigationStack: [],
  exploredNodes: [],
  discoveredClues: [],
  discoveredObjects: [],
  unlockedPersonalContent: [],
},

  world: {
visibleNodes: [
  "ROOM_01",
  "ROOM_02",
  "BASEMENT",
  "ARCHIVE",
  "ELEVATOR",

  "TABLE",
  "WINDOW",
  "LAMP",
  "NOTEBOOK",
  "PEN",
  "BOOK",
  "NOTE_0317",
  "PAGE_017",
],

    unlockedNodes: [
      "ROOM_01",
    ],

    changedNodes: [],
  },
};