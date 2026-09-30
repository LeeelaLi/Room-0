import type { WorldNode } from "@/types/game";

type RoomProps = {
  node: WorldNode;
  onBack: () => void;
  onOpenChild: (childId: string) => void;
};

export default function Room({
  node,
  onBack,
  onOpenChild,
}: RoomProps) {
  return (
    <main className="page">
      <div className="page-inner room">
        <header className="room-header">
          <button
            className="binary-button"
            onClick={onBack}
          >
            [ exit ]
          </button>

          <span>{node.name}/</span>
        </header>

        <section className="room-content">
          <p className="room-description">
            {node.description}
          </p>

          <p className="room-question">
            Anything you would like to inspect?
          </p>

          <div className="object-grid">
            {node.children?.map((childId) => (
              <button
                key={childId}
                className="object-button"
                onClick={() => onOpenChild(childId)}
              >
                [ {childId} ]
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}