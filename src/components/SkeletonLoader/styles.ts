import styled, { keyframes } from "styled-components";

const shine = keyframes`
    to {
      background-position-x: -200%;
    }
`;

export const Loader = styled.div`
    background: linear-gradient(100deg, #5a5a5a 8%, #6d6d6d 18%, #5a5a5a 33%);
    background-size: 200% 300%;

    -webkit-animation: 1.5s ${shine} linear infinite;
    animation: 1.5s ${shine} linear infinite;
    
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`;