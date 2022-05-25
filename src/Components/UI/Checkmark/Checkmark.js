import React from 'react';
import './Checkmark.css';

export default function Checkmark({ id, label, checked, reference }) {
  return (
    <div className="checkmark-container">
      <label for={id}>
        <input
          ref={reference}
          type="checkbox"
          id={id}
          defaultChecked={checked}
        />
        <span class="checkmark"></span>
        {label}
      </label>
    </div>
  );
}
