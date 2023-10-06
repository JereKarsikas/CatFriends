import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import { cats } from "./cats";
import SearchBox from "./SearchBox";
import NewCatFriend from "./NewCatFriend";

function App() {
  const [catId, setCatId] = useState(0);
  const [catState, setCatState] = useState({
    cats: cats,
    searchfield: "",
  });

  useEffect(() => {
    // Calculate the initial highestCatId from the stored cats data
    const initialHighestCatId = Math.max(
      ...cats.map((cat) => parseInt(cat.id, 10)),
      0
    );
    setCatId(initialHighestCatId);
  }, []); // Empty dependency array ensures it runs only once

  //LOCAL STORAGE

  //This code checks if there is any cat data stored in localStorage under the key 'cats'. If data is found, it parses it from JSON and sets it in the state.
  useEffect(() => {
    const storedCats = localStorage.getItem("cats");
    if (storedCats) {
      setCatState({ ...catState, cats: JSON.parse(storedCats) });
    }
  }, []);

  // ADD CAT WITH NEW ID AND LOCAL STORAGE
  const addCatHandler = (cat) => {
    // Calculate the next available ID
    const newCatId = String(catId + 1);

    const newCat = {
      ...cat,
      id: newCatId,
    };

    // Update the local storage
    const updatedCats = [newCat, ...catState.cats];
    localStorage.setItem("cats", JSON.stringify(updatedCats));

    setCatState((prevState) => {
      return { ...prevState, cats: updatedCats };
    });

    // Update the highestCatId
    setCatId(parseInt(newCatId, 10));
  };

  // SEARCH FIELD
  const onSearchChange = (event) => {
    setCatState({ ...catState, searchfield: event.target.value });
  };

  const filteredCats = catState.cats.filter((catsName) => {
    return catsName.name
      .toLowerCase()
      .includes(catState.searchfield.toLowerCase());
  });

  // HIDDEN REMOVE
  const removeCatHandler = (id) => {
    setCatState((prevState) => {
      const updatedCats = prevState.cats.filter((cat) => cat.id !== id);
      localStorage.setItem("cats", JSON.stringify(updatedCats));
      return { ...prevState, cats: updatedCats };
    });
  };

  return (
    <div className="tc">
      <h1 className="f1">Cat Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <NewCatFriend onAddCat={addCatHandler} catId={catId} />
      <CardList cats={filteredCats} onRemove={removeCatHandler} />
    </div>
  );
}

export default App;
