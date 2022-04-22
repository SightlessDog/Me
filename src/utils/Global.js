import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
    -moz-transition: all .4s ease-in;
    -o-transition: all .4s ease-in;
    -webkit-transition: all .4s ease-in;
    transition: all .2s ease-in;
    background-color : black; 
    font-size : 16px; 
    box-sizing : border-box; 
    height: 100%;
    }

    *, *:before, *:after {
        
    }

    body {
        cursor: none;  
        overflow: hidden;
        height: 100%;
    }
`;
