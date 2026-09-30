import type { WorldNode } from "@/types/game";
import Breadcrumb from "./Breadcrumb";

type ObjectViewProps = {
  node: WorldNode;
  navigationStack: string[];
  onBack: () => void;
  onOpenChild: (childId: string) => void;
};

export default function ObjectView({
  node,
  navigationStack,
  onBack,
  onOpenChild,
}: ObjectViewProps) {
  return (
    <main className="page">
      <div className="page-inner node-view">
        <header className="node-header">
          <button
            className="binary-button"
            onClick={onBack}
          >
            [ back ]
          </button>

          <span>{node.name}/</span>
        </header>

        <Breadcrumb
          navigationStack={navigationStack}
        />

        <section className="node-content">
          {node.description && (
            <p className="node-description">
              {node.description}
            </p>
          )}

          {node.clue && (
            <div className="node-clue">
              {node.clue}
            </div>
          )}

          {node.children && node.children.length > 0 && (
            <div className="node-children">
              {node.children.map((childId) => (
                <button
                  key={childId}
                  className="object-button"
                  onClick={() => onOpenChild(childId)}
                >
                  [ {childId} ]
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}