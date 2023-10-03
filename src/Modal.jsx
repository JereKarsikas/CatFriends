import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#main"); // Set the root element for accessibility

function App() {
  const [showModal1, setShowModal1] = useState(false);

  const handleOpenModal = () => {
    setShowModal1(true);
  };

  const handleCloseModal = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger #1 Modal</button>

      <Modal
        isOpen={showModal1}
        contentLabel="Modal #1 Global Style Override Example"
        onRequestClose={handleCloseModal}
      >
        <p>Modal #1 text!</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
