import styled from "styled-components";

export const Body = styled.div<{ color?: string }>`
    ${({ color }) => color == 'black' ? 'background-color: rgba(0,0,0,0.85)' : ''};
    border: 1px solid ${({ theme }) => theme.colors.gray04};

    padding: 12px;

    width: 100%;

    hr{
        width: 124px;

        margin: 18px auto;

        background-color: ${({ color }) => color == 'black' ? '#fff' : '#2d2d2d'};
    }
`;