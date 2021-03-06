import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    :root {
        --dark:#8e8e8e;
        --darker:#575757;
        --light:#c5c5c5;
        --lighter:#ececec;
        --lightest: #fff;

        --max-width: 800px;
        --min-width: 21rem;
    }

    body {
        padding: 0;
        margin: 0;
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }
`;

export const env = {
    collapseWidth: "28rem",
};
