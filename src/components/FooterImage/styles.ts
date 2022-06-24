import styled from "styled-components";

export const Body = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;

    aspect-ratio: 32/9;
    width: 100vw;
    height: auto;
    
    z-index: -1;

    opacity: 0.5;
    
    div{
        position: relative;
        width: 100%;
        height: 100%;
    }
`;