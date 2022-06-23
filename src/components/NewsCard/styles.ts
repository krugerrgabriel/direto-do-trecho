import styled from "styled-components";

export const Body = styled.article<{ type: String; }>`
    position: relative;

    aspect-ratio: 1/1;
    width: 100%;
    height: auto;

    cursor: pointer;

    div.info{
        position: absolute;
        bottom: 36px;
        left: 24px;

        width: calc(100% - 48px);
        height: auto;

        z-index: 4;

        h3{
            color: ${({ theme }) => theme.colors.primary};

            font-size: ${({ type }) => type == 'MoreVisited-ExtraLarge' ? '18px' : '12px'};
            font-weight: 600;

            text-transform: uppercase;

            margin: 0 0 4px 0;
        }

        h2{
            color: ${({ theme }) => theme.colors.white};

            font-size: ${({ type }) => type == 'MoreVisited-ExtraLarge' ? '32px' : '16px'};
            font-weight: 700;

            line-height: ${({ type }) => type == 'MoreVisited-ExtraLarge' ? '42px' : '24px'};

            margin: 0;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    h4{
        color: ${({ theme }) => theme.colors.primary};

        font-size: ${({ type }) => type == 'MoreVisited-ExtraLarge' ? '12px' : '10px'};
        font-weight: 500;

        position: absolute;
        right: ${({ type }) => type == 'MoreVisited-ExtraLarge' ? '16px' : '10px'};
        bottom: 8px;

        z-index: 3;
    }

    &:hover{
        div.info{
            h2{
                text-decoration: underline;
            }
        }
    }
`;

export const Overlay = styled.div`
    background: linear-gradient( 170deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 1) 100% );

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`;