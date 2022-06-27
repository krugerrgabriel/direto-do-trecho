import styled from "styled-components";

export const Body = styled.div`
    position: relative;

    aspect-ratio: 9/16;
    height: auto;
    width: 100%;

    padding: 0;

    margin: 24px 0 0 12px;
`;

export const Text = styled.h6`
    color: ${({ theme }) => theme.colors.gray04};

    font-size: 8px;
    font-weight: 400;

    letter-spacing: 0.8px;

    margin: 18px 0 -22px 12px;
`;