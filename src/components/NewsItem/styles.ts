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
    }

    p{
            color: ${({ theme }) => theme.colors.gray01};

            font-size: 18px;
            font-weight: 500;

            line-height: 27px;

            margin: ${({ type }) => type == 'normal' ? '4px 0 16px 0' : '0 0 18px 0'};

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
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

        text-transform: uppercase;

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

    @media(max-width: 1400px){
        flex-direction: column;

        div.info{
            margin: 16px 0 0 0;
        }
    }

    @media(max-width: 1200px) {
        h3{
            ${({ type }) => type == 'normal' ? 'font-size: 13px;' : ''};

            ${({ type }) => type == 'normal' ? 'margin: 0 0 6px 0;' : ''};
        }

        h2{
            ${({ type }) => type == 'normal' ? 'font-size: 20px;' : ''};

            ${({ type }) => type == 'normal' ? 'line-height: 26px;' : ''};
        }

        p{
            ${({ type }) => type == 'normal' ? 'font-size: 15px;' : ''};

            ${({ type }) => type == 'normal' ? 'line-height: 21px;' : ''};

            ${({ type }) => type == 'normal' ? 'margin: 2px 0 8px 0;' : ''};
        }
    }

    @media(max-width: 992px) {
        h3{
            font-size: ${({ type }) => type == 'normal' ? '14px' : '12px'};
        }

        h2{
            font-size: ${({ type }) => type == 'normal' ? '22px' : '28px'};

            line-height: ${({ type }) => type == 'normal' ? '28px' : '36px'};
        }

        p{
            font-size: ${({ type }) => type == 'normal' ? '17px' : '18px'};

            line-height: ${({ type }) => type == 'normal' ? '23px' : '27px'};

            margin: ${({ type }) => type == 'normal' ? '4px 0 12px 0' : ''};
        }
    }

    @media(max-width: 768px) {
        h3{
            font-size: ${({ type }) => type == 'normal' ? '13px' : '14px'};
        }

        h2{
            font-size: ${({ type }) => type == 'normal' ? '16px' : '28px'};

            line-height: ${({ type }) => type == 'normal' ? '24px' : '36px'};
        }

        p{
            font-size: ${({ type }) => type == 'normal' ? '14px' : '18px'};

            line-height: ${({ type }) => type == 'normal' ? '20px' : '27px'};

            margin: ${({ type }) => type == 'normal' ? '2px 0 8px 0' : ''};
        }
    }

    @media(max-width: 575px) {
        h3{
            font-size: ${({ type }) => type == 'normal' ? '13px' : '14px'};

            ${({ type }) => type == 'normal' ? 'margin: 0;' : ''};
        }

        h2{
            ${({ type }) => type == 'normal' ? 'font-size: 17px;' : ''};

            ${({ type }) => type == 'normal' ? 'line-height: 24px' : ''};
        }

        p{
            ${({ type }) => type == 'normal' ? 'font-size: 15px;' : ''};

            ${({ type }) => type == 'normal' ? 'line-height: 21px;' : ''};

            ${({ type }) => type == 'normal' ? 'margin: 4px 0 8px 0' : ''};
        }
    }
`;

export const ImageWrapper = styled.div<{ type: String; }>`
    aspect-ratio: 16/9;

    height: ${({ type }) => type == 'normal' ? '225px' : '400px'};
    width: 100%;

    position: relative;

    @media(max-width: 1400px){
        height: auto;
    }
`;

export const Divider = styled.hr<{type?: String}>`
    margin: ${({ type }) => type == 'half' ? '36px 0 36px 12px' : '18px 0'};

    ${({ type }) => type == 'half' ? 'width: 225px' : ''};
`;