import styled from "styled-components";
import { variables } from "../../constants/variables";

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to bottom, #00000010, #00000005, #ffffff10);
    box-shadow: #00000020 0 5px 40px 10px;
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
        font-family: ${variables.primaryFont};
        border: 1px solid ${variables.contrastColor};
        padding: 5px 10px;
        border-radius: 20px;
    }

    li{
        font-size: 20px;
        margin: 0 25px;
    }
`