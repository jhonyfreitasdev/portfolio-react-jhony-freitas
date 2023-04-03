import styled from "styled-components";
import { device } from "../../../constants/device";

export const Container = styled.div`
    position: relative; 
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;

    @media ${device.mobileL}{
        height: 109vh;
    }
`