import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        color: #ffffff;
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        outline: none;
    }

    body{ 
        background-color: #000000;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
    }

    ul{
        list-style: none;
    }
`