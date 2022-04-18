import React from 'react';
import './Checkmark.css';

export default function Checkmark({ id, label, checked }) {
  return (
    <div className="checkmark-container">
      <label for={id}>
        <input type="checkbox" id={id} defaultChecked={checked} />
        <span class="checkmark"></span>
        {label}
      </label>
    </div>
  );
}
