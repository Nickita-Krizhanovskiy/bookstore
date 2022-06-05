import { StyledBackButton } from "./style";

interface IBackButton {
  onClick: () => void;
}

export const BackButton = ({ onClick }: IBackButton) => {
  return <StyledBackButton type="button" onClick={onClick} />;
};

export default BackButton;