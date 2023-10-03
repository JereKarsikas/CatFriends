import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList";
import { cats } from "./cats";
import SearchBox from "./SearchBox";
import Button from "./Button";

function App() {
  const [catState, setCatState] = useState({
    cats: cats,
    searchfield: "",
  });

  const onSearchChange = (event) => {
    setCatState({ ...catState, searchfield: event.target.value });
  };

  const filteredCats = catState.cats.filter((cat) => {
    return cat.name.toLowerCase().includes(catState.searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">CatFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Button />
      <CardList cats={filteredCats} />
    </div>
  );
}

export default App;
