import Card from "./Card";

function CardList({ cats, onRemove }) {
  return (
    <div>
      {cats.map((cat) => {
        return (
          <Card
            key={cat.id}
            id={cat.id}
            name={cat.name}
            city={cat.city}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default CardList;
