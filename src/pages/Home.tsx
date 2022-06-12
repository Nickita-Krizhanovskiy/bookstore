import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookSlider } from "../components/BookSlider/BookSlider";

import { Title } from "../components/Title/Title";

export const Home = () => {
  return (
    <>
      <Title>Our books</Title>
      <NewLink to="/bookstore/new">
        <BookSlider />
      </NewLink>
      
    </>
  );
};

const NewLink = styled(Link)`
  text-decoration: none;
`;
