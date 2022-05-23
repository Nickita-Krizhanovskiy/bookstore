import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledImageBlock = styled.div`
-webkit-box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
-moz-box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
box-shadow: 20px 15px 32px 0px rgba(9, 20, 28, 0.47);
border-radius: 10px;
  & {
    transition: 0.6s;
  }
  &:hover {
    transform: scale(1.1); /* Увеличиваем масштаб */
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 21px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const StyledTitle = styled.h3`
  color: ${Colors.PRIMARY};
  ${typography.H3}
  margin-bottom: 8px;
`;
export const StyledText = styled.p`
  color: ${Colors.SECONDARY};
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
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
text-align: center;
`;