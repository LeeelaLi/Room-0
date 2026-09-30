import { world } from "./world";
import type {
  GameState,
  WorldNode,
} from "../types/game";

// 这个东西现在应该显示什么内容？
export function resolveNode(
  node: WorldNode,
  gameState: GameState
): WorldNode {
  const clues =
    gameState.player.discoveredClues;

  let resolvedNode = node;

  if (
    node.id === "LAMP" &&
    clues.includes("03:17")
  ) {
    resolvedNode = {
      ...resolvedNode,
      description: "The lamp is on.",
    };
  }

  if (
    node.id === "WINDOW" &&
    clues.includes("03:17")
  ) {
    resolvedNode = {
      ...resolvedNode,
      description:
        "There is a light in the distance.",
    };
  }

  if (resolvedNode.children) {
    resolvedNode = {
      ...resolvedNode,
      children:
        resolvedNode.children.filter(
          (childId) =>
            isNodeVisible(
              childId,
              gameState
            )
        ),
    };
  }

  return resolvedNode;
}

// 这个东西现在应该存在吗？
export function isNodeVisible(
  nodeId: string,
  gameState: GameState
): boolean {
  const node = world[nodeId];

  if (!node) {
    return false;
  }

  if (
    gameState.world.visibleNodes.includes(
      nodeId
    )
  ) {
    return true;
  }

  if (!node.visibleWhen) {
    return false;
  }

  if (node.visibleWhen.clues) {
    const hasAllClues =
      node.visibleWhen.clues.every(
        (clue) =>
          gameState.player.discoveredClues.includes(
            clue
          )
      );

    if (!hasAllClues) {
      return false;
    }
  }

  if (node.visibleWhen.exploredNodes) {
    const hasExploredAll =
      node.visibleWhen.exploredNodes.every(
        (nodeId) =>
          gameState.player.exploredNodes.includes(
            nodeId
          )
      );

    if (!hasExploredAll) {
      return false;
    }
  }

  return true;
}