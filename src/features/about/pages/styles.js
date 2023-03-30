import styled from "styled-components"
import { device } from "../../../constants/device";
import { variables } from "../../../constants/variables"
import fotoPerfil from "../../../_assets/images/foto-portfolio.jpg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    font-family: ${variables.secondaryFont};
    max-width: 1440px;
    height: 100vh;
    padding: 260px 10px 27px 10px;
    margin: 0 auto;

    @media ${device.mobileL} {
        padding: 170px 10px 5px 10px;
    }
`

export const Image = styled.div`
    position: fixed;
    top: 77.8px;
    opacity: 0.9;
    background-image: url(${fotoPerfil});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    width: 1440px;
    height: 100%;

    img{
        overflow: hidden;
    }

    @media ${device.mobileL} {
        position: fixed;
    }
`