import styled from "styled-components"
import { device } from "../../../constants/device"

export const Info = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 97%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); 

    @media ${device.laptopL} {
        width: 500px;
    }
`

export const GifI = styled.img`
    transition: ease-in-out 0.7s;
    opacity: 0.7;
`

export const GifS = styled.source`
    transition: ease-in-out 0.7s;
    opacity: 0.7;
`

export const Title = styled.h2`
    font-size: 37px;

    @media ${device.laptopL} {
        font-size: 25px;
    }
    @media ${device.mobileM} {
        font-size: 20px;
    }
`

export const Description = styled.p`
    text-align: center;
    font-size: 22px;
    margin: 40px 0 20px 0;

    @media ${device.laptopL} {
        margin: 20px 0 10px 0;
        font-size: 18px;
    }
    @media ${device.mobileL} {
        font-size: 15px;
        margin: 6px 0 0 0;
    }
`

export const Button = styled.a`
    display: inline-block;
    background-color: #ffffff;
    color: #000000;
    font-size: 18px;
    text-align: center;
    width: 120px;
    padding: 6px 0;
    margin: 0 15px;
    border-radius: 7px;

    @media ${device.laptopL} {
        width: 95px;
        font-size: 16px;
    }
    @media ${device.mobileM} {
        margin: 0 7px;
    }
    @media ${device.mobileS} {
        width: 70px;
        font-size: 14px;
    }
`

export const GifContainer = styled.div`
    position: absolute;
    background-color: #000000;
    overflow: hidden;
    transition: ease-in-out 0.4s;
    border-radius: 7px;
    width: 1190px;
    height: 530px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-43%);

    @media ${device.laptopL} {
        width: 1000px;
    }
    @media ${device.laptop} {
        width: 800px;
        height: 480px;
    }
    @media ${device.tabletL} {
        width: 590px;
        height: 380px;
    }
    @media ${device.tabletS} {
        width: 420px;
        height: 270px;
    }
    @media ${device.mobileL} {
        width: 270px;
        height: 317px;
    }
    
    &:hover {
        @media (min-width: 1216px) {    
            width: 1200px;
            height: 540px;
        }
        ${GifI}{
            opacity: 0.2;
        }
        ${GifS}{
            opacity: 0.2;
        }
        ${Info}{
            display:flex;
        }
    }
`