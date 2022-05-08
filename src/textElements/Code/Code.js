import React from 'react';

export default function Code({ children }) {
  const lines = children.split('\n');
  const lineComponents = lines.map((value, index) => (
    <CodeLine number={index + 1}>{value}</CodeLine>
  ));
  return <code>{lineComponents}</code>;
}

// TODO: add syntax highlighting
function CodeLine({ children, number }) {
  const backgroundColor = number % 2 === 0 ? '#ccc' : '#666';

  return (
    <div className="code-line-container" style={{ backgroundColor }}>
      <span>{number}</span>
      {children}
    </div>
  );
}
