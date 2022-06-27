import styled from "styled-components";

export const MoreVisited = styled.div`
    background-color: rgba(0, 0, 0, 0.85);

    padding: 186px 0 36px 0;

    @media(max-width: 768px){
        padding: 138px 0 36px 0;
    }
`;

export const Subtitle = styled.h2<{ color?: string, margin: string }>`
    color: ${({ color }) => color == 'black' ? '#fff' : '#2d2d2d'};

    font-size: 28px;
    font-weight: 800;
    font-style: italic;

    margin: ${({ margin }) => margin};
`;