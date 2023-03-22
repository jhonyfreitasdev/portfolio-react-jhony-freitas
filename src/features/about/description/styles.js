import styled from "styled-components";
import { variables } from "../../../constants/variables";

export const Container = styled.div`
    position: absolute;
    background-color: #000000af;
    width: 40%;
    padding: 15px;
    border-radius: 5px;
    top: 55%;
    left: 26%;
    transform: translateX(-50%) translateY(-50%);

    p{
        margin-bottom: 10px;
        text-align: justify;
    }
`

export const ButtonCv = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(170deg, ${variables.mediumColor}, ${variables.lightColor}, ${variables.darkColor});
    color: ${variables.contrastColor};
    font-family: ${variables.primaryFont};
    font-size: 17px;
    width: 110px;
    margin-top: 17px;
    padding: 5px;
    border-radius: 7px;
    transition: ease-in-out 0.5s;
    
    i{
        color: ${variables.contrastColor};
        transition: ease-in-out 0.7s;
    }

    &:hover{
        transform: translate(1px, -1px);
        box-shadow: -3px 3px 15px -4px #ffffff44;
    }

    &:hover > i{
        color: #ffffff;
    }
`