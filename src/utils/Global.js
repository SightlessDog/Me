import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
    -moz-transition: all .4s ease-in;
    -o-transition: all .4s ease-in;
    -webkit-transition: all .4s ease-in;
    transition: all .2s ease-in;
        background-color : ${(props) => props.theme.primaryColor}; 
        font-size : 16px; 
        box-sizing : border-box; 
    }

    *, *:before, *:after {
        box-sizing : border-box; 
        padding: 1px 5px;
        margin : 0;  
        cursor: none;  
    }

    body {
    }

    main {
        width : 90%; 
        margin: 0 auto; 
    }
`;
