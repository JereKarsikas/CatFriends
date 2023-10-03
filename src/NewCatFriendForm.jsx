import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCancel } from "@mdi/js";

function NewCatFriendForm({ onCancel, onSaveCatData }) {
  const [cat, setCat] = useState({
    catName: "",
    city: "",
  });

  // Cat name input
  function handleCatNameChange(e) {
    setCat({
      ...cat,
      catName: e.target.value,
    });
  }

  // City name input
  function handleCityChange(e) {
    setCat({
      ...cat,
      city: e.target.value,
    });
  }

  // Submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    const catsData = {
      name: cat.catName,
      city: cat.city,
    };

    onSaveCatData(catsData);
    setCat("");
  };

  return (
    <>
      <div className="bn bg-light-green br3 dib pa4  ma2 bw-2 shadow-5">
        <form onSubmit={handleSubmit}>
          <h2 className="tc">Create new cat friend</h2>
          <div className="mb3 tc">
            <input
              className="br3 pa2"
              value={cat.catName}
              onChange={handleCatNameChange}
              placeholder="Name"
            />
          </div>
          <div className="mt3 tc">
            <input
              className="br3 pa2"
              value={cat.city}
              onChange={handleCityChange}
              placeholder="City"
            />
          </div>

          <h2>{cat.catName}</h2>
          <p>{cat.city}</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="ma2 bg-light-blue" type="submit">
              Add
            </button>
            <button
              className="cancel-button bg-lightest-blue"
              onClick={onCancel}
            >
              <Icon path={mdiCancel} size={1} color="red" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default NewCatFriendForm;
