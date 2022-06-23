import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray02};

    padding: 42px 0;

    p{
        color: ${({ theme }) => theme.colors.white};

        margin: 0;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 25/6;

    width: 100%;
    height: 100%;

    opacity: 0.75;
`;