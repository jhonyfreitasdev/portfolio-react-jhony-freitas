import { createGlobalStyle } from 'styled-components';
import { variables } from "../../constants/variables"

export const GlobalStyle = createGlobalStyle`
    *{
        color: #ffffff;
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        outline: none;
    }

    body {background: linear-gradient(145deg, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor});}

    a {text-decoration: none;}

    img {width: 100%;}

    ul {list-style: none;}
`