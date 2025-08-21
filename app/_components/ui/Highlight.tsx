interface HighlightProps {
  number: string;
  text: string;
}

export function Highlight({ number, text }: HighlightProps) {
  return (
    <div className="highlight">
      <span className="highlight-number">{number}</span>
      <span className="highlight-text">{text}</span>
    </div>
  );
}
