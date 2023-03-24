import styled from "styled-components";
import { variables } from "../../../constants/variables"

export const Container = styled.div`
    display: flex; 
    align-items: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    font-family: ${variables.primaryFont};
    padding: 75px 40px 15px 40px;    margin: 0 auto;
    max-width: 1440px;
    height: 100vh;
`