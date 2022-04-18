import React, { useEffect } from 'react';
import './ModalCard.css';

export default function ModalCard({ show, onClose, children }) {
  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
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
    <div className="modal-card" onClick={onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
