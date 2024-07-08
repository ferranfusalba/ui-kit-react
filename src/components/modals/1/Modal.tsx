// Modal as a separate component
import { useEffect, useRef } from "react";
import { StyledModal } from "./Modal.styles";

function Modal({
  openModal,
  closeModal,
  children,
}: {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <StyledModal>
      <dialog ref={ref} onCancel={closeModal}>
        {children}
        <button onClick={closeModal}>Close</button>
      </dialog>
    </StyledModal>
  );
}

export default Modal;
