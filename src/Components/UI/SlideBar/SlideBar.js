import React, { useRef } from 'react';

import './SlideBar.css';

export default function SlideBar() {
  const bar = useRef();
  const start = useRef();
  const end = useRef();

  let startMove = false;
  let endMove = false;

  setInterval(() => {
    if (startMove) {
      console.log('start is moving')
    }
  }, 500)

  // Now we want to make them slide

  return (
    <div className="slidebar" ref={bar}>
      <span
        className="slidebar__control"
        ref={start}
        style={{
          left: '0%',
        }}
        onMouseDown={e => {
          console.log('start move detected');
          startMove = true;
        }}
        onMouseUp={e => {
          console.log('start stop detected');
          startMove = true;
        }}
      />
      <span
        className="slidebar__control"
        ref={end}
        style={{
          left: '100%',
        }}
      />
    </div>
  );
}
