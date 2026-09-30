import type { GameState } from "../types/game";

export const initialGameState: GameState = {
  player: {
    key: null,
    navigationStack: [],
    exploredNodes: [],
    discoveredClues: [],
    unlockedPersonalContent: [],
  },

  world: {
    visibleNodes: [
      "ROOM_01",
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