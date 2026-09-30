
import type {
  GameState,
  WorldNode,
} from "../types/game";

//这个东西现在应该显示什么内容？
export function resolveNode(
  node: WorldNode,
  gameState: GameState
): WorldNode {
  const clues =
    gameState.player.discoveredClues;

  if (
    node.id === "LAMP" &&
    clues.includes("03:17")
  ) {
    return {
      ...node,
      description: "The lamp is on.",
    };
  }

  if (
    node.id === "WINDOW" &&
    clues.includes("03:17")
  ) {
    return {
      ...node,
      description:
        "There is a light in the distance.",
    };
  }

  return node;
}

// 这个东西现在应该存在吗？
export function isNodeVisible(
  nodeId: string,
  gameState: GameState
): boolean {
  return gameState.world.visibleNodes.includes(
    nodeId
  );
}
