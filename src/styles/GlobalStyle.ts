import { createGlobalStyle } from 'styled-components';

import { Colors } from './Themes';

interface Props {
    ignore: string;
}

const GlobalStyle = createGlobalStyle<Props>`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  #root {
    font-size: 60%;
  }

  #root :not(:${p => p.ignore}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
    overflow: scroll;
    overflow-x: hidden;
  }

  body {
      font-family: 'Open Sans', sans-serif;
      background: ${Colors.LightGray};
  }

  html, body, #root {
      height: 100vh;
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
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (min-width: 700px) {
      #root {
          font-size: 70%;
      }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
