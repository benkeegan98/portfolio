import { createGlobalStyle } from "styled-components"
import { BLACK, WHITE } from "./colors";
import variables from "./variables";
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
    ${variables};
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html {
        --scroll-behavior: smooth!important;
        scroll-behavior: smooth!important;
    }

    body {
        background-color: ${BLACK};
        color: ${WHITE};

        &.blur {
            overflow: hidden;

            header {
                background-color: transparent;
            }

            #content > * {
                filter: blur(5px) brightness(0.7);
                transition: var(--transition);
                pointer-events: none;
                user-select: none;
            }
        }
    }
    
    #root{
        margin:0 auto;
    }
    ${TransitionStyles};
`

export default GlobalStyle;