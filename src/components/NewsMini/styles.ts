import styled from "styled-components";

export const Body = styled.article<{ type: string; color?: string; }>`
    display: flex;

    width: 100%;
    height: auto;

    cursor: pointer;

    padding: 0;

    flex-direction: column;

    div.info{
        display: flex;
        flex-direction: column;
        margin: 4px 0 0 0;

        p{
            color: ${({ theme }) => theme.colors.gray01};

            font-size: 18px;
            font-weight: 500;

            line-height: 27px;

            margin: 0 0 18px 0;
        }

        div{
            display: flex;

            h4{
                color: ${({ color }) => color == 'black' ? '#fff' : '#2d2d2d'};

                font-size: 12px;
                font-weight: 400;

                margin: 0;

                &:first-of-type{
                    margin: 0 42px 0 0;
                }
            }
        }
    }

    h3{
        color: ${({ theme }) => theme.colors.primary};

        font-size: 14px;
        font-weight: 500;

        text-transform: uppercase;

        margin: 0 0 2px 0;
    }

    h2{
        color: ${({ color }) => color == 'black' ? '#fff' : '#2d2d2d'};

        font-size: 16px;
        font-weight: 600;

        line-height: 21px;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    &:hover{
        h2{
            text-decoration: underline;
        }
    }

    @media (max-width: 768px){
        margin: 0 0 24px 0;
    }
`;

export const ImageWrapper = styled.div<{ type: String; }>`
    aspect-ratio: 16/9;

    width: 100%;
    height: auto;

    position: relative;
`;

export const Divider = styled.hr<{ color }>`
    margin: 18px auto;
`;