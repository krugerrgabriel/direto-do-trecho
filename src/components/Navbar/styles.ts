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

    z-index: 500;

    @media (max-width: 768px) {
        height: 70px;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 25/6;
    width: 175px;
    height: auto;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 125px;
    }
`;

export const SidenavWrapper = styled.div`
    position: relative;

    aspect-ratio: 4/3;
    width: 24px;
    height: auto;

    cursor: pointer;
`;