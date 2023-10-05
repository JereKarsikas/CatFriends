import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import { cats } from "./cats";
import SearchBox from "./SearchBox";
import NewCatFriend from "./NewCatFriend";

function App() {
  const [catState, setCatState] = useState({
    cats: cats,
    searchfield: "",
  });

  //This code checks if there is any cat data stored in localStorage under the key 'cats'. If data is found, it parses it from JSON and sets it in the state.
  useEffect(() => {
    const storedCats = localStorage.getItem("cats");
    if (storedCats) {
      setCatState({ ...catState, cats: JSON.parse(storedCats) });
    }
  }, []);

  const onSearchChange = (event) => {
    setCatState({ ...catState, searchfield: event.target.value });
  };

  const filteredCats = catState.cats.filter((catsName) => {
    return catsName.name
      .toLowerCase()
      .includes(catState.searchfield.toLowerCase());
  });

  // first update the state with the new cat data, and then we use localStorage.setItem to store the updated cat list as a JSON string under the key 'cats'.
  const addCatHandler = (cat) => {
    setCatState((prevState) => {
      const updatedCats = [cat, ...prevState.cats];
      localStorage.setItem("cats", JSON.stringify(updatedCats));
      return { ...prevState, cats: updatedCats };
    });
  };

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
      <NewCatFriend onAddCat={addCatHandler} />
      <CardList cats={filteredCats} onRemove={removeCatHandler} />
    </div>
  );
}

export default App;
