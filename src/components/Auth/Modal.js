import React from 'react';
import '../../styles/modal.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
