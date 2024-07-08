import { createLazyFileRoute } from "@tanstack/react-router";
import Modal from "../../components/modals/1/Modal";
import { useState } from "react";

export const Route = createLazyFileRoute("/modals/1")({
  component: ModalPage,
});

function ModalPage() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>Open modal</button>
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        Modal content.
      </Modal>
    </div>
  );
}
