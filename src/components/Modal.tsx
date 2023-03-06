import React from "react";
import "./Modal.css"
interface Props {
  onClose: () => void;
  children: any
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;