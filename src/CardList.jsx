import Card from "./Card";

function CardList({ cats }) {
  const catsList = cats.map((cat) => {
    return <Card key={cat.id} id={cat.id} name={cat.name} city={cat.city} />;
  });
  return <div>{catsList}</div>;
}

export default CardList;
