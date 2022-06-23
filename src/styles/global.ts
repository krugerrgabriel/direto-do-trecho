import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: "Outfit", sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        overflow-x: hidden;

        max-width: 100vw;
        min-height: 100vh;

        position: relative;
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
`;