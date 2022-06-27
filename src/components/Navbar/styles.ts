import styled from 'styled-components';

export const Body = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    width: 100vw;
    height: 102px;
    
    position: fixed;
    top: 0;
    left: 0;

    border-bottom: 6px solid ${({ theme }) => theme.colors.primary};

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.075);

    z-index: 500;

    @media (max-width: 768px) {
        height: 92px;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 255/61;
    width: 255px;
    height: auto;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 225px;
    }
`;

export const SidenavWrapper = styled.div`
    position: relative;

    aspect-ratio: 4/3;
    width: 24px;
    height: auto;

    cursor: pointer;
`;