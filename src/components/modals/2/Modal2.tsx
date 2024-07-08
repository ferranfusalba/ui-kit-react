// Modal as a separate component
import { useEffect, useRef } from "react";
import { StyledModal2 } from "./Modal2.styles";

function Modal2({
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
    <StyledModal2>
      <dialog ref={ref} onCancel={closeModal}>
        {children}
        <button onClick={closeModal}>Close</button>
      </dialog>
    </StyledModal2>
  );
}

export default Modal2;
