import { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 6px 16px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(144, 202, 249);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  & .startIcon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-left: -4px;
  }
`;

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Button = ({ onClick, children }: Props) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
