import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        background-color: #000000;
        color: #ffffff;
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        outline: none;
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