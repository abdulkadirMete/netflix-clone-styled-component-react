import { createGlobalStyle } from "styled-components";
import { colors, dimens } from "./Variables";

const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



body {
  min-width: 680px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  background-color: #000;
  overflow-y: scroll;
  overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


/* Buttons */

    .btn{
        background-color: ${colors.buttonBg};
        color: white;
        padding: ${dimens.buttonPadding};
        border: none;
        font-size: 1.1em;
        border-radius:${dimens.radius};
    }


    /* input */

    .textInput{
      padding: 1.5rem .25rem;
      border: none;
    }


    /* Form Group */

    .form-group {
        display: flex;
        width: 40%;

        button {
          border-radius: 0;
          background-color: ${colors.buttonDarkerBg};
          flex: 1;
          font-size: 1.6em;
          display: flex;
          align-items: center;
          justify-content: space-around;

          &:hover {
            opacity: 0.95;
          }

          svg {
            font-size: 0.75em;
            font-weight: 800;
          }
        }

        input {
          flex: 3;

          &:focus {
            outline-width: 1.2px;
            outline-color: #048cc5;
            outline-style: solid;
          }
        }
      }

      @media (max-width: 1000px) {
    *{
      text-align: center;
      justify-self: center;
    }
  }

`;

export default GlobalStyle;
