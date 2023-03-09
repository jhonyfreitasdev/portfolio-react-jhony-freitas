import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to bottom, ${props => props.theme.color01}, ${props => props.theme.color03});
    width: 100%;
    max-width: 1440px; 
    padding: 20px 0 15px 0;
    margin: 0 auto;
    top: 0;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    ul{
        display: flex;
        font-family: ${props => props.theme.primaryFont};
        padding: 5px 10px;
        border: 1px solid ${props => props.theme.color06};
        border-radius: 20px;
    }

    li{
        font-size: 20px;
        margin: 0 25px;
    }
`