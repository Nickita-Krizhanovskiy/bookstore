import { Heart } from "../../assets";
import { routes } from "../../routes/routes";
import { useAppDispatch } from "../../store/hooks/hooks";
import { removeFavorites } from "../../store/slices/favoriteReducer";
import { IBook } from "../../types/books";
import {
  HeartContainer,
  Block,
  ContainerFavorites,
  Image,
  ImageBlock,
  StyledLink,
  Price,
  Subtitle,
  Title,
} from "./style";

interface IBookItemProps {
  book: IBook;
}

export const FavoriteItem = ({ book }: IBookItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveFavorites = (book: IBook) => {
    dispatch(removeFavorites(book));
  };
  return (
    <ContainerFavorites>
      <StyledLink to={`${routes.FAVORITE_BOOK}/${book.isbn13}`}>
        <ImageBlock>
          <Image src={book.image} alt={book.title} />
        </ImageBlock>
        <Block>
          <Title>{book.title}</Title>
          <Subtitle>{book.subtitle}</Subtitle>
          <Price>{book.price}</Price>
        </Block>
      </StyledLink>
      <HeartContainer type="button" onClick={() => handleRemoveFavorites(book)}>
        <Heart />
      </HeartContainer>
    </ContainerFavorites>
  );
}