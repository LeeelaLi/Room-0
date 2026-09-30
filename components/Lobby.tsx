import ClueLog from "./ClueLog";
import FileTree from "./FileTree";
import type { GameState } from "../types/game";

type LobbyProps = {
  gameState: GameState;
  onOpenNode: (nodeId: string) => void;
};

// const rooms = [
//   "ROOM 01",
//   "ROOM 02",
//   "BASEMENT",
//   "ARCHIVE",
//   "ELEVATOR",
// ];

export default function Lobby({
  gameState,
  onOpenNode,
}: LobbyProps) {
  return (
    <main className="page">
      <div className="page-inner lobby">
        <header className="lobby-header">
          <div>
            <div className="system-label">
              LOCATION
            </div>

            <h1>LOBBY/</h1>
          </div>

          <div className="lobby-status">
            SYSTEM ONLINE
          </div>
        </header>

        {/* <div className="room-list">
          {rooms.map((room) => (
            <button
              key={room}
              className="room-entry"
              onClick={() => onEnterRoom(room)}
            >
              <span>{room}</span>

              <span className="room-arrow">
                →
              </span>
            </button>
          ))}
                  <ClueLog clues={clues} />  
        </div> */}
        <FileTree
  gameState={gameState}
  onOpenNode={onOpenNode}
/>

<ClueLog
  clues={gameState.player.discoveredClues}
/>
      </div>
    </main>
  );
}