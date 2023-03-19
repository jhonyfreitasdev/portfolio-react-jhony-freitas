import styled from "styled-components";
import { variables } from "../../../constants/variables";

export const Container = styled.div`
    position: absolute;
    background-color: #00000088;
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
    background-color: #ffffff;
    color: #000000;
    font-family: ${variables.secondaryFont};
    width: 100px;
    margin-top: 17px;
    padding: 5px;
    border-radius: 7px;
    
    i{
        background-color: #ffffff;
        color: #000000;
    }
`