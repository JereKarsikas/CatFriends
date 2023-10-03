import Card from "./Card";

function CardList({ cats }) {
  return (
    <div>
      {cats.map((cat) => {
        return (
          <Card key={cat.id} id={cat.id} name={cat.name} city={cat.city} />
        );
      })}
    </div>
  );
}

export default CardList;
