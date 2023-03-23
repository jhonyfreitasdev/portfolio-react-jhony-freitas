import styled from "styled-components";
import { device } from "../../constants/device";
import { variables } from "../../constants/variables";

export const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, ${variables.darkColor}, ${variables.mediumColor});
    box-shadow: #ffffff10 0 2px 30px 2px;
    width: 100%;
    max-width: 1440px; 
    padding: 20px 0 15px 0;
    margin: 0 auto;
    top: 0;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    @media ${device.tabletS} {
        display: none;
    }
`

export const List = styled.ul`
    display: flex;
    font-family: ${variables.primaryFont};
    border: 1px solid ${variables.contrastColor};
    padding: 5px 10px;
    border-radius: 20px;

    li{
        font-size: 20px;
        margin: 0 25px;
    }

    a:hover{
        color: #73e5ff;
    }
`