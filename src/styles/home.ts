import styled from "styled-components";

export const MoreVisited = styled.div`
    background-color: rgba(0, 0, 0, 0.85);

    border-bottom: 6px solid ${({ theme }) => theme.colors.primary};

    padding: 118px 0 36px 0;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.colors.gray02};

    font-size: 28px;
    font-weight: 700;
    font-style: italic;
`;