import ClueLog from "./ClueLog";

type LobbyProps = {
  clues: string[];
  onEnterRoom: (roomName: string) => void;
};

const rooms = [
  "ROOM 01",
  "ROOM 02",
  "BASEMENT",
  "ARCHIVE",
  "ELEVATOR",
];

export default function Lobby({
  clues,
  onEnterRoom,
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

        <div className="room-list">
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
        </div>
      </div>
    </main>
  );
}