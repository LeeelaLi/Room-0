type KeyDisplayProps = {
  playerKey: string;
  onContinue: () => void;
};

export default function KeyDisplay({
  playerKey,
  onContinue,
}: KeyDisplayProps) {
  return (
    <main className="page">
      <div className="page-inner key-screen">
        <div>
          <div className="system-label">
            KEY GENERATED
          </div>

          <h1 className="key-title">
            {playerKey}
          </h1>

          <p className="key-description">
            This key belongs to you.
            <br />
            Its purpose is unknown.
          </p>
        </div>

        <button
          className="binary-button"
          onClick={onContinue}
        >
          [ continue ]
        </button>
      </div>
    </main>
  );
}