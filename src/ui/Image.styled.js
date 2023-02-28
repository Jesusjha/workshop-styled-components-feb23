import styled from "styled-components";

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  height: 15rem;
  background-color: transparent;

  &.image--opacity {
    opacity: 0.2
  }
`;