import styled from "styled-components";
import { device } from "../../../constants/device";
import { variables } from "../../../constants/variables";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: linear-gradient(5deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    box-shadow: 0 0 15px 0 #00000055;
    border-radius: 8px;
    padding: 10px;
    margin: 25px 0;
    width: 40%;

    @media ${device.laptopL} {
        width: 50%;
    }
    @media ${device.laptop} {
        width: 55%;
    }
    @media ${device.tablet} {
        width: 60%;
    }
    @media ${device.tabletS}{
        width: 75%;
    }@media ${device.mobileL} {
        width: 90%;
    }
`
export const Input = styled.input`
    background-color: #e3e3e3;
    color: #000000;
    font-family: ${variables.secondaryFont};
    border-radius: 8px;
    margin: 10px;
    padding: 8px;
`

export const TextArea = styled.textarea`        
    background-color: #e3e3e3;
    color: #000000;
    font-family: ${variables.secondaryFont};
    border-radius: 8px;
    margin: 10px;
    padding: 8px;
    height: 70px;
`

export const Button = styled.input`        
    align-self: center ;
    background: linear-gradient(175deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    color: ${variables.contrastColor};
    font-family: ${variables.primaryFont};
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    margin: 10px;
    padding: 7px;
    width: 120px;

    @media ${device.mobileM} {
        font-size: 14px;
        width: 100px;
    }
`