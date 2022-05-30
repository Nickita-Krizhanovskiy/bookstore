import { useAppSelector } from "../../store/hooks/hooks";
import { getFavorites } from "../../store/selector/favoriteSelector";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";

export const FavoriteList = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <div>
      {favorites.map((book: any) => {
        return <FavoriteItem book={book}></FavoriteItem>;
      })}
    </div>
  );
};