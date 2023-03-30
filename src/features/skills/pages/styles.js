import styled from "styled-components";
import { device } from "../../../constants/device";
import { variables } from "../../../constants/variables"

export const Container = styled.div`
    display: flex; 
    align-items: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    font-family: ${variables.primaryFont};
    padding: 95px 40px 15px 40px;    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;

    @media ${device.tablet} {
        height: auto;
        padding: 110px 120px 15px 120px;
    }
    @media ${device.tabletS} {
        padding: 110px 55px 15px 55px;
    }
    @media ${device.mobileM} {
        padding: 110px 20px 15px 20px;
    }
`