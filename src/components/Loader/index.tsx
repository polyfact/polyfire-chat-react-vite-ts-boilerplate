import { CircleNotch } from "phosphor-react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);

  .spinner {
    animation: ${spin} 1s linear infinite;
    color: #333;
    width: 50px;
    height: 50px;
  }
`;

export function Loader() {
  return (
    <StyledLoader>
      <CircleNotch className="spinner" />
    </StyledLoader>
  );
}
