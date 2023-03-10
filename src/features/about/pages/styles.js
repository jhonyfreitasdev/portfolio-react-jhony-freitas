import styled from "styled-components"
import { variables } from "../../../constants/variables"
import fotoPerfil from "../../../_assets/images/foto-03.jpg";

export const Container = styled.div`
    position: relative;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    max-width: 1440px;
    height: 100vh;
    padding: 75px 0 0 0;  
    margin: 0 auto;
`

export const Image = styled.div`
    opacity: 0.9;
    background-image: url(${fotoPerfil});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    border-radius: 5px;
    width: 100%;
    height: 100%;
`