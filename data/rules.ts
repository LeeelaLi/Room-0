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
  if (
    gameState.world.visibleNodes.includes(
      nodeId
    )
  ) {
    return true;
  }

  if (
    nodeId === "DRAWER" &&
    gameState.player.discoveredClues.includes(
      "03:17"
    )
  ) {
    return true;
  }

  return false;
}