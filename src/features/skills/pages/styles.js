import styled from "styled-components";
import { variables } from "../../../constants/variables"

export const Container = styled.div`
    display: flex; 
    align-items: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    max-width: 1440px;
    height: 100vh;
    padding: 15px;
    margin: 0 auto;
`