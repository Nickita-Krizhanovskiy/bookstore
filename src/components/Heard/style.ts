import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledHeard = styled.div`
  ${typography.B1}
  background-color: ${Colors.PRIMARY};
  transition: .3s linear;
  &:hover {
    path {
      stroke: ${Colors.CT_RED};
    }
  }
  &:active {
    path {
      fill: ${Colors.CT_RED};
    }
  }
  &:disabled {
    background-color: ${Colors.SECONDARY};
  }
`;