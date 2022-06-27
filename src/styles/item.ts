import styled from "styled-components";

export const NavbarPadding = styled.div`
    background-color: rgba(0, 0, 0, 0.85);

    width: 100vw;
    height: 82px;

    @media(max-width: 768px){
        height: 64px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};

    font-size: 40px;
    font-weight: 700;
    font-style: unset;

    line-height: 46px;

    text-align: start;
    text-transform: uppercase;

    letter-spacing: -0.8px;

    margin: 0;

    @media(max-width: 768px){
        font-size: 28px;

        line-height: 36px;
    }

    @media(max-width: 576px){
        font-size: 24px;

        line-height: 32px;
    }
`;

export const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.gray03};

    padding: 1px 24px;

    margin: 24px 0;
`;

export const FineLine = styled.h3`
    color: ${({ theme }) => theme.colors.gray02};

    font-size: 18px;
    font-weight: 400;

    line-height: 28px;

    margin: 12px 0;

    @media(max-width: 768px){
        font-size: 16px;

        line-height: 21px;

        margin: 8px 0 14px 0;
    }
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

    margin: 0 0 24px 0;

    b{
        font-weight: 600;
    }
`;

export const BannerWrapper = styled.div<{ margin: boolean }>`
    position: relative;

    aspect-ratio: 16/9;
    width: 100%;
    height: auto;

    margin: 24px 0 ${({ margin }) => margin ? '24px' : '0'} 0;
`;

export const IconBox = styled.div`
    position: absolute;

    left: 12px;
    top: -10px;

    div{
        position: relative;

        aspect-ratio: 1/1;
        width: 52px;
    }
`;

export const LegendBox = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};

    height: max-content;
    width: 100%;

    padding: 14px 22px;
    margin: 0 0 24px 0;

    p{
        font-size: 12px;
        font-weight: 500;

        margin: 0;
    }
`;