import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray02};

    padding: 42px 0;

    p{
        color: ${({ theme }) => theme.colors.white};

        margin: 0;

        @media (max-width: 1200px) {
            font-size: 13px;
        }

        @media (max-width: 768px) {
            text-align: center;

            margin: 18px 0 0 0;
        }

        @media (max-width: 576px) {
            font-size: 14px;
        }
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 25/6;

    width: 100%;
    height: 100%;

    opacity: 0.75;

    @media (max-width: 576px) {
        width: 75%;

        margin: 0 auto;
    }
`;