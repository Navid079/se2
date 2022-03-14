// Libraries
import React, { useRef } from 'react';

// Stylesheets
import './IconInput.css';

const IconInput = ({
  className,
  placeholder,
  type,
  onChange,
  icon,
  reference,
  error,
}) => {
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
      {icon}
      <input
        ref={reference}
        className="text-input"
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      <p className="text-input__error">{error}</p>
    </span>
  );
};

export default IconInput;
