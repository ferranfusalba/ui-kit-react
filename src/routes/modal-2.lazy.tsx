import { createLazyFileRoute } from "@tanstack/react-router";
import Modal2 from "../components/modal-2/Modal2";
import { useState } from "react";

export const Route = createLazyFileRoute("/modal-2")({
  component: Modal2Page,
});

function Modal2Page() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>Open modal</button>
      <Modal2 openModal={modal} closeModal={() => setModal(false)}>
        Modal 2 content.
      </Modal2>
    </div>
  );
}
