import styled from "styled-components";

export const Body = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.gray04};

    padding: 12px;

    width: 100%;

    hr{
        width: 124px;

        margin: 18px auto;
    }
`;