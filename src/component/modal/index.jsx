import React from "react";

import "../../asset/styles/modal.scss";

function Modal({ children, isOpen }) {
  return (
    <div className={`modal-container ${isOpen ? "modal-container-show" : ""}`}>
      <div className="modal-body">{children}</div>
    </div>
  );
}

export default Modal;
