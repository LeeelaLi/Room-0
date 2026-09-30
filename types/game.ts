export type WorldNode = {
  id: string;
  name: string;
  description?: string;
  children?: string[];
  clue?: string;
  visible?: boolean;
  locked?: boolean;
};

export type WorldState = {
  visibleNodes: string[];
  unlockedNodes: string[];
  changedNodes: string[];
};

export type PlayerState = {
  key: string | null;
  navigationStack: string[];
  exploredNodes: string[];
  discoveredClues: string[];
  unlockedPersonalContent: string[];
};

export type GameState = {
  player: PlayerState;
  world: WorldState;
};