import { world } from "../data/world";
import { isNodeVisible } from "../data/rules";
import type { GameState } from "../types/game";

type FileTreeProps = {
  gameState: GameState;
  onOpenNode: (nodeId: string) => void;
};

const rootNodes = [
  "ROOM_01",
  "ROOM_02",
  "BASEMENT",
  "ARCHIVE",
  "ELEVATOR",
];

export default function FileTree({
  gameState,
  onOpenNode,
}: FileTreeProps) {
  function renderNode(
    nodeId: string,
    depth: number
  ) {
    const node = world[nodeId];

    if (!node) {
      return null;
    }

    if (!isNodeVisible(nodeId, gameState)) {
      return null;
    }

    const isExplored =
      gameState.player.exploredNodes.includes(
        nodeId
      );

    const hasChildren =
      !!node.children &&
      node.children.length > 0;

    const symbol =
      isExplored && hasChildren
        ? "▼"
        : " ";

    return (
      <div key={nodeId}>
        <button
          className="file-tree-node"
          style={{
            paddingLeft: `${depth * 20}px`,
          }}
          onClick={() =>
            onOpenNode(nodeId)
          }
        >
          <span className="file-tree-symbol">
            {symbol}
          </span>

          <span>{node.name}</span>
        </button>

        {isExplored &&
          node.children?.map(
            (childId) =>
              renderNode(
                childId,
                depth + 1
              )
          )}
      </div>
    );
  }

  return (
    <div className="file-tree">
      <div className="file-tree-title">
        WORLD/
      </div>

      <div className="file-tree-content">
        {rootNodes.map((nodeId) =>
          renderNode(nodeId, 0)
        )}
      </div>
    </div>
  );
}