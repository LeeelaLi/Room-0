export type WorldState = {
  visibleNodes: string[];
  unlockedNodes: string[];
  changedNodes: string[];
};

export const initialWorldState: WorldState = {
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
};