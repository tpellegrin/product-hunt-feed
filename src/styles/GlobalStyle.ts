import { createGlobalStyle } from 'styled-components';

import { Colors } from './Theme';

const GlobalStyle = createGlobalStyle`
    #root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${Colors.LightGray};
    }

    html, body, #root {
        height: 100vh;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem;
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        #root {
            font-size: 70%;
        }
    }
`;

export default GlobalStyle;
