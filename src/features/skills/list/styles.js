import styled from "styled-components";
import { device } from "../../../constants/device";

export const IconsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 50px;
    transition: ease-in-out 0.5s;
    width: 100%;

    @media ${device.tabletL} {
        gap: 30px;
    }

    li{
        text-align: center;
        width: 110px;
        min-height: 166px;

        @media ${device.mobileL} {
            width: 90px;
            min-height: 130px;
            font-size: 13px;
        }
    }

    i{
        font-size: 70px;
        padding-bottom: 10px;

        @media ${device.mobileL} {
            font-size: 50px;
        }
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #00000020;
    transition: width 0.5s;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #00000030;
    padding: 15px;
    height: 100%;
    width: 100%;

    @media ${device.mobileL} {
        padding: 9px;
    }
`

export const Info = styled.div`
    p{
        display: none;
        transition: ease-in-out 2s;
    }
`

export const ContainerImg = styled.div`
    width: 80px;

    @media ${device.mobileL} {
        width: 50px;
    }
`
export const Javascript = styled.li`
    i { color: #ffff00; }
    h4 { text-shadow: 0 0 10px #ffff00; }
`
export const React = styled.li`
    i { color: #61DAFB; }
    h4 { text-shadow: 0 0 10px #61DAFB; }
`
export const Git = styled.li`
    i { color: #ff6600; }
    h4 { text-shadow: 0 0 10px #ff6600; }
`
export const Html = styled.li`
    i { color: #ec4305; }
    h4 { text-shadow: 0 0 10px #ec4305; }
`
export const Css = styled.li`
    i { color: #0084ff; }
    h4 { text-shadow: 0 0 10px #0084ff; }
`
export const Github = styled.li`
    i { color: #deb887; }
    h4 { text-shadow: 0 0 10px #deb887; }
`
export const Jest = styled.li`
    img { width: 90%; }
    h4 { text-shadow: 0 0 10px #c63d14; }
`
export const Styled = styled.li`
    img { width: 90%; }
    h4 { text-shadow: 0 0 10px #9A5F85; }
`
export const MySQL = styled.li`
    ${ContainerImg}{
        display: flex;
        justify-content: center;
    }

    img { 
        width: 95px; 

        @media ${device.mobileL} {
            width: 70px;
        }
    }

    h4 { text-shadow: 0 0 10px #00618A; }
`