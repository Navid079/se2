import React from 'react';
import './Code.css';

export default function Code({ children }) {
  const lines = children.split('\n');
  const lineComponents = lines.map((value, index) => (
    <CodeLine number={index + 1}>{value}</CodeLine>
  ));
  return <code className='code'>{lineComponents}</code>;
}

// TODO: add syntax highlighting
function CodeLine({ children, number }) {
  const backgroundColor = number % 2 === 0 ? 'var(--clr-secondary-5)' : '#dba35366';

  return (
    <div className="code-line-container" style={{ backgroundColor }}>
      <span className='code-line__number'>{number}</span>
      {children}
    </div>
  );
}
