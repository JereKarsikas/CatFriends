import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";

function Card({ id, name, city }) {
  return (
    <div className="bn bg-light-green br3 dib pa3 ma2 bw-2 shadow-5">
      <div className="tr">
        <button className="dim">
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
