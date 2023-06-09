import styled from "styled-components";
import { device } from "../../../constants/device";
import { variables } from "../../../constants/variables"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    max-width: 1440px;
    height: 100vh;
    padding: 110px 15px 15px 15px;
    margin: 0 auto;
`

export const H2 = styled.h2`
    font-size: 35px;
    text-align: center;
    text-shadow: 5px 6px 30px #00000099;

    @media ${device.mobileL} {
        font-size: 30px;
    }
    @media ${device.mobileS} {
        font-size: 25px;
    }
`

export const P = styled.p`
    font-size: 23px;
    text-align: center;
    text-shadow: 5px 6px 30px #00000099;

    @media ${device.mobileL} {
        font-size: 21px;
    }
    @media ${device.mobileS} {
        font-size: 19px;
    }
`