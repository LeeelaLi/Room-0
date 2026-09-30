import type { GameState } from "../types/game";
import { world } from "../data/world";
import { isNodeVisible } from "../data/rules";

type FileTreeProps = {
  nodeId: string;
  gameState: GameState;
  onOpenNode: (nodeId: string) => void;
};

export default function FileTree({
  nodeId,
  gameState,
  onOpenNode,
}: FileTreeProps) {
  const node = world[nodeId];

  if (!node || !node.children) {
    return null;
  }

  const visibleChildren = node.children.filter(
    (childId) =>
      isNodeVisible(childId, gameState)
  );

  if (visibleChildren.length === 0) {
    return null;
  }

  return (
    <div className="file-tree">
      {visibleChildren.map((childId) => {
        const child = world[childId];

        if (!child) {
          return null;
        }

        return (
          <button
            key={childId}
            type="button"
            className="file-tree-item"
            onClick={() => onOpenNode(childId)}
          >
            <span>
              {child.name}
            </span>

            <span className="file-tree-arrow">
              &gt;
            </span>
          </button>
        );
      })}
    </div>
  );
}