 
import styled from "styled-components";
import { device } from "../../constants/device";
import { variables } from "../../constants/variables";

export const Container = styled.header`
    position: fixed;
    display: none;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, ${variables.darkColor}, ${variables.mediumColor});
    box-shadow: #ffffff10 0 2px 30px 2px;
    width: 100%;
    height: 85px;
    padding: 20px 35px;
    top: 0;
    z-index: 1;
    
    @media ${device.tabletS} {
        display: flex;
    }
    @media ${device.mobileS} {
        height: 76px;
    }
`

export const MenuIcon = styled.button`
    background-color: #00000000;
    width: 30px;
`

export const Nav = styled.nav`
    position: absolute;
    display: block;
    background-image: linear-gradient(to right, ${variables.darkColor}, ${variables.lightColor});
    font-family: ${variables.primaryFont};
    width: 170px;
    height: 745px;
    padding-top: 75px;
    top: 0;
    left: 0;
`

export const CloseButton = styled.button`
    position: absolute;
    background-color: #00000000;
    width: 33px;
    top: 26px;
    left: 117px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li{
        font-size: 20px;
        margin: 2px 25px;
    }

    a{
        display: block;
    }
`

export const DivLogo = styled.div`
    width: 50px;
`