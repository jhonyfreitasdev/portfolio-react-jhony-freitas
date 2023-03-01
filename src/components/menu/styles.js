import styled from "styled-components";

export const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    z-index: 1;

    ul{
        display: flex;
        font-family: ${props => props.theme.primaryFont};
        padding: 10px;
        border: 1px solid #ffffff;
        border-radius: 20px;
    }

    li{
        margin: 0 10px;
    }
`