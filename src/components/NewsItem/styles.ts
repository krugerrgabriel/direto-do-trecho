import styled from "styled-components";

export const Body = styled.article<{ type: String; }>`
    display: flex;

    width: 100%;
    height: auto;

    cursor: pointer;

    padding: 0;

    ${({ type }) => type == 'normal' ? '' : 'flex-direction: column;'};

    div.info{
        display: flex;
        flex-direction: column;
        margin: ${({ type }) => type == 'normal' ? '0 0 0 16px' : '4px 0 0 0'};

        p{
            color: ${({ theme }) => theme.colors.gray01};

            font-size: 18px;
            font-weight: 500;

            line-height: 27px;

            margin: ${({ type }) => type == 'normal' ? '4px 0 16px 0' : '0 0 18px 0'};
        }

        div{
            display: flex;

            h4{
                color: ${({ theme }) => theme.colors.gray02};

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

        font-size: ${({ type }) => type == 'normal' ? '16px' : '14px'};
        font-weight: 600;

        text-transform: uppercase;

        margin: ${({ type }) => type == 'normal' ? '0 0 8px 0' : '0 0 2px 0'};
    }

    h2{
        color: ${({ theme }) => theme.colors.gray02};

        font-size: ${({ type }) => type == 'normal' ? '24px' : '28px'};
        font-weight: 700;

        line-height: ${({ type }) => type == 'normal' ? '30px' : '36px'};

        margin: ${({ type }) => type == 'normal' ? '0' : '0 0 8px 0'};

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
`;

export const ImageWrapper = styled.div<{ type: String; }>`
    aspect-ratio: ${({ type }) => type == 'normal' ? '11/9' : '107/50'};

    width: ${({ type }) => type == 'normal' ? '275px' : '100%'};
    height: ${({ type }) => type == 'normal' ? '225px' : '400px'};

    position: relative;
`;

export const Divider = styled.hr<{type?: String}>`
    margin: ${({ type }) => type == 'half' ? '36px auto' : '18px 0'};

    ${({ type }) => type == 'half' ? 'width: 225px' : ''};
`;