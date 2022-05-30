import { useAppSelector } from "../../store/hooks/hooks";
import { getCards } from "../../store/selector/cardSelector";

import { CardItem } from "../CardItem/CardItem";

export const CardList = () => {
  const { cards } = useAppSelector(getCards);
  return (
    <div>
      {cards.map((book: any) => {
        return <CardItem book={book}></CardItem>;
      })}
    </div>
  );
};