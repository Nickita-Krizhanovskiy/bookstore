import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 2fr 56px;
  grid-column-gap: 32px;
  margin-bottom: 50px;
`;

export const StyledImageBlock = styled.div`
-webkit-box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
-moz-box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
border-radius: 10px;
`;

export const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const StyledTitle = styled.h3`
  color: ${Colors.PRIMARY};
  ${typography.H3}
`;

export const StyledSubtitle = styled.p`
  color: ${Colors.PRIMARY2};
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
`;
export const StyledPrice = styled.h3`
  ${typography.H3}
  color: ${Colors.PRIMARY};
`;

export const StyledBlock = styled.div`
  align-self: center;
`;
export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: ${Colors.CT_RED}
  }
`;