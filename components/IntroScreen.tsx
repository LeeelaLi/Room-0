type IntroScreenProps = {
  onEnter: () => void;
};

export default function IntroScreen({
  onEnter,
}: IntroScreenProps) {
  return (
    <main className="page">
      <div className="page-inner intro">
        <div className="intro-label">
          ROOM 0 / SYSTEM
        </div>

        <div className="intro-content">
          <p className="intro-title">
            EVERYONE GETS A KEY.
          </p>

          <p className="intro-subtitle">
            NOBODY KNOWS WHAT IT OPENS.
          </p>

          <button
            className="binary-button"
            onClick={onEnter}
          >
            [ enter ]
          </button>
        </div>

        <div className="intro-footer">
          <span>v0.1.0</span>
          <span>UNKNOWN WORLD</span>
        </div>
      </div>
    </main>
  );
}