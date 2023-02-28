import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  padding: .7rem 8.5rem;
  border: 0;
  border-radius: .8rem;
  background-color: ${({theme}) => theme.colorPrimary};
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 400;

  &:hover {
    background-color: #29A9F0;
    transition: 0.2s;
  }

  &:active {
    transform: scale(0.99);
  }

  &.login__button {
    margin-top: 5rem;
  }
`;