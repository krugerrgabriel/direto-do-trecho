import styled from "styled-components";

export const Body = styled.div<{ color?: string }>`
    ${({ color }) => color == 'black' ? 'background-color: rgba(0,0,0,0.8)' : ''};
    border: 1px solid ${({ theme }) => theme.colors.gray04};

    padding: 32px 24px;

    width: 100%;

    position: relative;

    margin: 0 0 0 12px;

    hr{
        width: 124px;

        margin: 18px auto;

        background-color: ${({ color }) => color == 'black' ? '#fff' : '#2d2d2d'};
    }

    div.iconBox{
        position: absolute;
        left: -12px;
        top: 24px;

        div{
            position: relative;

            aspect-ratio: 1/1;
            width: 52px;
            height: auto;
        }
    }
`;