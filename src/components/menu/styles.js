import styled from "styled-components";

export const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    background-color: #000000;
    max-width: 1440px; 
    padding: 30px 0 10px 0;
    margin: 0 auto;
    z-index: 1;

    ul{
        display: flex;
        font-family: ${props => props.theme.primaryFont};
        padding: 10px;
        border: 1px solid #ffffff;
        border-radius: 20px;
    }

    li{
        font-size: 20px;
        margin: 0 25px;
    }
`