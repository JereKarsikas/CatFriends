import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";

function Card({ id, name, city }) {
  const deleteButton = () => {
    // TÄHÄN TILALLE TEE KOMPONENTTI
    alert("You can't delete cat friend because cat friends are forever");
  };

  return (
    <div className="bg-light-green br3 dib pa3 ma2 bw-2 shadow-5 tc ">
      <div className="tr">
        <button className="grow bn bg-light-green" onClick={deleteButton}>
          <Icon path={mdiDelete} title="User remove" size={1} color="red" />
        </button>
      </div>
      <div className="">
        <img alt="Animated Cats" src={`https://robohash.org/${id}?set=set4`} />
      </div>
      <h2>{name}</h2>
      <p>{city}</p>
    </div>
  );
}

export default Card;
