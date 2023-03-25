import styled from "styled-components"
import { device } from "../../../constants/device"

export const Info = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); 
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
`

export const Description = styled.p`
    font-size: 22px;
    margin: 40px 0 20px 0;
`

export const Button = styled.a`
    display: inline-block;
    background-color: #ffffff;
    color: #000000;
    font-size: 18px;
    text-align: center;
    width: 120px;
    padding: 7px 12px;
    margin: 0 15px;
    border-radius: 7px;
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
    @media ${device.mobileS} {
        width: 210px;
        height: 246px;
    }

    &:hover {
        width: 1200px;
        height: 540px;
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