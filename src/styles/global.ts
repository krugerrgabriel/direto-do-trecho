import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: "Outfit", sans-serif;
    }
    
    html { 
        scroll-behavior: auto !important;
    }

    body {
        margin: 0;
        padding: 0;

        overflow-x: hidden;

        max-width: 100vw;
        min-height: 100vh;

        position: relative;
    }

    .margin-12px{
        margin: 12px 0 0 0;
    }
    .margin-24px{
        margin: 24px 0 0 0;
    }
    .margin-36px{
        margin: 36px 0;
    }
    .margin-72px{
        margin: 72px 0 0 0;
    }

    .text-decoration-none{
        text-decoration: none;
    }

    a.no-link{
        cursor: default;

        text-decoration: none;
    }

    @media(max-width: 992px){
        .margin-36px-992px{
            margin: 36px 0 0 0;
        }

        .hide-992px{
            display: none;
        }
    }

    @media(max-width: 768px){
        .margin-24px-768px{
            margin: 24px 0 0 0;
        }

        .justify-768px-center{
            justify-content: center !important;
        }
    }
`;