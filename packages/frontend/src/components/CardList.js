import Card from "./Card";
import { getArticles } from "../service/articleService";

function CardList() {
  const cards = getArticles();
  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>
          <Card card={card} />
        </div>
      ))}
    </>
  );
}
export default CardList;
