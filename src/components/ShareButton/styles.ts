import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ color }) => color};

    width: 100%;
    height: 42px;

    padding: 0 24px;

    transition: 0.2s;

    div.iconWrapper.facebook,
    div.iconWrapper.twitter{
        aspect-ratio: 1/2;
    }
    div.iconWrapper.whatsapp,
    div.iconWrapper.telegram{
        aspect-ratio: 1/1;
    }
    div.iconWrapper{
        position: relative;

        height: 16px;
        width: 16px;

        margin: 0 24px 0 0;
    }

    p{
        color: ${({ theme }) => theme.colors.white};

        font-size: 16px;
        font-weight: 600;

        margin: 0;
    }

    &:hover{
        filter: saturate(125%);
    }
    &:active{
        transform: scale(0.99);
    }

    @media(max-width: 992px){
        margin: 12px 0 0 0;
    }
`;