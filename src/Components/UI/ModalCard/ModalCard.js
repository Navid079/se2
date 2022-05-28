import React, { useEffect } from 'react';
import './ModalCard.css';

export default function ModalCard({ show, fill, onClose, children }) {
  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if (show && (e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  });

  if (!show) return null;

  return (
    <div
      className={`modal-card ${fill ? 'modal-card--fill' : ''} `}
      onClick={onClose}
    >
      <div
        className={`modal__content ${fill ? 'modal-content--fill' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
