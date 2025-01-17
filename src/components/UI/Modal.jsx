import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onModalClose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onModalClose}>
      <div>{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
