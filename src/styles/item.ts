import styled from "styled-components";

export const NavbarPadding = styled.div`
    background-color: rgba(0, 0, 0, 0.85);

    width: 100vw;
    height: 82px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};

    font-size: 31px;
    font-weight: 700;
    font-style: unset;

    line-height: 40px;

    text-align: start;

    margin: 0;
`;

export const FineLine = styled.h3`
    color: ${({ theme }) => theme.colors.gray02};

    font-size: 18px;
    font-weight: 400;

    line-height: 28px;

    margin: 12px 0;
`;

export const Author = styled.h4`
    color: ${({ theme }) => theme.colors.black};

    font-size: 13px;
    font-weight: 500;

    margin: 0 0 6px 0;

    b{
        font-weight: 600;
    }
`;

export const Date = styled.h4`
    color: ${({ theme }) => theme.colors.gray02};

    font-size: 13px;
    font-weight: 500;

    b{
        font-weight: 600;
    }
`;

export const BannerWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 400px;

    margin: 24px 0;
`;