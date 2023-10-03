import { useState } from "react";
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

  const onSearchChange = (event) => {
    setCatState({ ...catState, searchfield: event.target.value });
  };

  const filteredCats = catState.cats.filter((catsName) => {
    return catsName.name
      .toLowerCase()
      .includes(catState.searchfield.toLowerCase());
  });

  // Can add new cat to the list. Bring old cats and add new one.
  const addCatHandler = (cat) => {
    setCatState((prevState) => {
      return { ...prevState, cats: [cat, ...prevState.cats] };
    });
  };

  return (
    <div className="tc">
      <h1 className="f1">Cat Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <NewCatFriend onAddCat={addCatHandler} />
      <CardList cats={filteredCats} />
    </div>
  );
}

export default App;
