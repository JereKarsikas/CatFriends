import { useState } from "react";
import "./App.css";
import CardList from "./CardList";
import { cats } from "./cats";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="f1">CatFriends</h1>
      <CardList cats={cats} />
    </div>
  );
}

export default App;
