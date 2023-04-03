import styled from "styled-components";
import { device } from "../../../constants/device"

export const SetaVoltar = styled.button`
    position: absolute;
    background-color: #00000000;
    cursor: pointer;
    top: 50%;
    left: 2%;
    z-index: 1;

    img { width: 20px; }

    @media ${device.mobileL} {
        top: 38%;
    }
`

export const SetaAvancar = styled.button`
    position: absolute;
    background-color: #00000000;
    cursor: pointer;
    top: 50%;
    right: 2%;
    z-index: 1;

    img { width: 20px; }

    @media ${device.mobileL} {
        top: 38%;
    }
`