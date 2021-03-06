import styled, { ThemeConsumer } from "styled-components";

export const Body = styled.div`
    position: relative;

    aspect-ratio: 56/19;
    height: auto;
    width: 100%;

    padding: 0;

    margin: 26px 0 0 0;
`;

export const Text = styled.h6`
    color: ${({ theme }) => theme.colors.gray04};
    
    font-size: 8px;
    font-weight: 400;

    letter-spacing: 0.8px;

    margin: 0 0 -24px 0;
`;