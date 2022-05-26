// Libraries
import React, { useRef } from 'react';

// Stylesheets
import './TextInput.css';

export default function TextInput({
  className,
  placeholder,
  type,
  onChange,
  reference,
  error,
}) {
  const containerRef = useRef();

  const focusHandler = event => {
    containerRef.current.style.borderColor = 'var(--clr-tertiary-5)';
  };

  const blurHandler = event => {
    containerRef.current.style.borderColor = '';
  };

  return (
    <span
      className={`text-input__container ${
        error ? 'text-input__container--error' : ''
      } ${className || ''}`}
      ref={containerRef}
    >
      <input
        className="text-input"
        ref={reference}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      <p className="text-input__error">{error}</p>
    </span>
  );
}
