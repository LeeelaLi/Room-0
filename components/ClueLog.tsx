type ClueLogProps = {
  clues: string[];
};

export default function ClueLog({
  clues,
}: ClueLogProps) {
  if (clues.length === 0) {
    return null;
  }

  return (
    <section className="clue-log">
      <div className="clue-log-title">
        DISCOVERED
      </div>

      <div className="clue-log-list">
        {clues.map((clue) => (
          <div
            key={clue}
            className="clue-log-item"
          >
            {clue}
          </div>
        ))}
      </div>
    </section>
  );
}