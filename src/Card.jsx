import { useState } from "react";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import Modal from "react-modal";

import "./App.css";

function Card({ id, name, city, onRemove }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className="bg-light-green br3 dib pa3 ma2 bw-2 shadow-5 tc ">
      <div className="tr">
        <button className="grow bn bg-light-green" onClick={handleOpenModal}>
          <Icon path={mdiDelete} title="User remove" size={1} color="red" />
        </button>

        <Modal
          style={{ width: "200px" }}
          isOpen={showModal}
          ariaHideApp={false}
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="tr">
            <button onClick={handleCloseModal}>X</button>
          </div>
          <h2 className="f1 tc">
            You can't delete cat friend, cat friends are FOREVER!
          </h2>
        </Modal>
      </div>
      <div className="">
        <img alt="Animated Cats" src={`https://robohash.org/${id}?set=set4`} />
      </div>
      <h2>{name}</h2>
      <p>{city}</p>

      <button
        className="grow bn bg-light-green"
        onClick={handleRemove}
      ></button>
    </div>
  );
}

export default Card;
