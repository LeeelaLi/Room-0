export type WorldNode = {
  id: string;
  name: string;
  description?: string;
  children?: string[];
  clue?: string;

  visible?: boolean;
  locked?: boolean;

  visibleWhen?: {
    clues?: string[];
    exploredNodes?: string[];
  };

  lockedWhen?: {
    clues?: string[];
    exploredNodes?: string[];
  };
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
  discoveredObjects: string[];
  unlockedPersonalContent: string[];
};

export type GameState = {
  player: PlayerState;
  world: WorldState;
};