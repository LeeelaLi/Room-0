import type { WorldState } from "./world";

export type GameState = {
  playerKey: string | null;

  navigationStack: string[];

  exploredNodes: string[];

  discoveredClues: string[];

  unlockedPersonalContent: string[];

  world: WorldState;
};