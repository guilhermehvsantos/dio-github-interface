import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
margin-top: 200px;
display: flex;
justify-content: center;
align-items: center;
animation: ${rotate} 2s linear infinite;
`
;