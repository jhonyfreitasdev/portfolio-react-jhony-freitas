import styled from "styled-components";
import { device } from "../../constants/device";
import { variables } from "../../../constants/variables";

export const Container = styled.div`
    position: relative;
    background-color: #000000af;
    width: 55%;
    padding: 15px;
    border-radius: 5px;

    @media ${device.laptopL} {
        width: 70%;
    }
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.tabletS} {
        width: 90%;
    }
    @media ${device.mobileL} {
        width: 100%;
    }

    p{
        font-size: 16px;
        margin-bottom: 10px;
        text-align: justify;

        @media ${device.laptop}  {
            font-size: 14px;
        }
        @media ${device.tabletS} {
            font-size: 13px;
            margin-bottom: 7px;
        }
        @media ${device.mobileS} {
            font-size: 12px;
        }
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
    transition: ease-in-out 0.4s;

    @media ${device.tablet} {
        font-size: 15px;
        width: 100px;
    }
    
    i{
        color: ${variables.contrastColor};
        transition: ease-in-out 0.5s;
    }

    &:hover{
        transform: translateY(-1px);
        box-shadow: 0 0 15px -4px #ffffff1f;
    }

    &:hover > i{
        color: #ffffff;
    }
`