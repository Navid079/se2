// Libraries
import React, { useRef } from 'react';

// Stylesheets
import './IconInput.css';

const IconInput = ({ className, placeholder, type, onChange, icon }) => {
  const containerRef = useRef();

  const focusHandler = event => {
    containerRef.current.style.borderColor = 'var(--clr-tertiary-5)';
  };

  const blurHandler = event => {
    containerRef.current.style.borderColor = '';
  };

  return (
    <span className={`text-input__container ${className}`} ref={containerRef}>
      {icon}
      <input
        className="text-input"
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </span>
  );
};

export default IconInput;
