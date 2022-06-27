import styled from "styled-components";

import { Container } from 'react-bootstrap';

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray03};

    position: fixed;
    top: 138px;
    left: 0;

    width: 100vw;
    height: 36px;

    z-index: 5;

    a{
        color: ${({ theme }) => theme.colors.gray02};

        font-size: 13px;
        font-weight: 500;

        text-decoration: none;
    }

    @media(max-width: 768px){
        top: 108px;

        a{
            font-size: 11px;
        }
    }
`;

export const ContainerStyled = styled(Container)`
    display: flex;
    align-items: center;

    height: 100%;
`;

export const ArrowWrapper = styled.div`
    position: relative;
    
    height: 11px;
    width: 6.27px;

    margin: 0 12px 2px 12px;
`;