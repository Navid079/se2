import React from 'react';
import './Code.css';

export default function Code({ children }) {
  let lines;
  let caret = false;
  if (typeof children === 'object') {
    lines = children.reduce((value, item) => {
      if (item.type === 'caret') {
        caret = true;
        return value;
      }
      return value + item.value;
    }, '');
  }
  lines = lines.split('\n');
  const lineComponents = lines.map((value, index) => {
    if (index === lines.length - 1)
      return (
        <CodeLine number={index + 1}>
          {value}
          <span className="caret">|</span>
        </CodeLine>
      );
    return <CodeLine number={index + 1}>{value}</CodeLine>;
  });
  return <code className="code">{lineComponents}</code>;
}

// TODO: add syntax highlighting
function CodeLine({ children, number }) {
  const backgroundColor =
    number % 2 === 0 ? 'var(--clr-secondary-5)' : '#dba35366';

  return (
    <div className="code-line-container" style={{ backgroundColor }}>
      <span className="code-line__number">{number}</span>
      {children}
    </div>
  );
}
