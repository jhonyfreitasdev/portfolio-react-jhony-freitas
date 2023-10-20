import styled from "styled-components";
import { device } from "../../../constants/device";

export const List = styled.ul`
    display: flex;
    margin-bottom: 20px;

    @media ${device.mobileL} {
        margin-bottom: 7px;
    }
    @media ${device.mobileS} {
        margin-bottom: 0;
    }
`

export const ListItem = styled.li`
    margin: 12px;
    
    @media ${device.mobileM} {
        margin: 9px;
    }

    i{
        font-size: 30px;

        @media ${device.mobileM} {
            font-size: 25px;

        }
    }
`
export const Javascript = styled.i`
    color: #ffff00;
`
export const React = styled.i`
    color: #61DAFB;
`
export const Html = styled.i`
    color: #ec4305;
`
export const Css = styled.i`
    color: #0084ff;
`
export const Styled = styled.i`
    display: block;
    width: 30px;

    @media ${device.mobileM} {
        width: 26px;
    }
`
export const TypeScript = styled.i`
    display: block;
    width: 30px;

    @media ${device.mobileM} {
        width: 26px;
    }
`
export const Sass = styled.i`
    display: block;
    width: 30px;

    @media ${device.mobileM} {
        width: 26px;
    }
`
export const Jest = styled.i`
    display: block;
    width: 30px;

    @media ${device.mobileM} {
        width: 26px;
    }
`