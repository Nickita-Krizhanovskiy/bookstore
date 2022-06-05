import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookAPI } from "../../services/bookService";
import { ISearchBooksApi } from "../../types/books";
import { CurrentPage, Page, Pages, StyledPagination, Button } from "./style";

const Pagination = () => {
  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
  const navigation = useNavigate();

  const handleNextButton = () => {
    if (searchResult?.total && +page < Math.ceil(+searchResult?.total) / 10) {
      navigation(`/search/${title}/${Number(page) + 1}`);
    }
  };

  const handlePrevButton = () => {
    if (+page > 1) {
      navigation(`/search/${title}/${Number(page) - 1}`);
    }
  };

  useEffect(() => {
    bookAPI.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <StyledPagination>
      <Button type="button" onClick={handlePrevButton}>
        Prev
      </Button>
      <Pages>
        <Page onClick={handlePrevButton}>{+page > 1 ? +page - 1 : ""}</Page>
        <CurrentPage>{page}</CurrentPage>
        <Page onClick={handleNextButton}>
          {searchResult?.total && +page < Math.ceil(+searchResult?.total) / 10
            ? +page + 1
            : ""}
        </Page>
      </Pages>
      <Button type="button" onClick={handleNextButton}>
        Next
      </Button>
    </StyledPagination>
  );
};

export default Pagination;