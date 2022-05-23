import React from "react";
import { Link } from "react-router-dom";
import { Logotype } from "../../assets";

import { Nav } from "../Nav/Nav";
import { Search } from "../Search/Search";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logotype />
      </Link>
      <Search />
      <Nav />
    </StyledHeader>
  );
};