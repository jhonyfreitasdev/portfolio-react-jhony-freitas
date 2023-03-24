import styled from "styled-components";
import { device } from "../../../constants/device";

export const List = styled.ul`
    display: flex;
    margin: 70px 0 25px 0;


    li{ 
        margin: 15px; 

        @media ${device.mobileS} {
            margin: 10px;
        }
    }
        
    i{ 
        font-size: 43px; 
        transition: 0.3s ease-in-out;

        @media ${device.mobileL} {
            font-size: 35px;
        }
        @media ${device.mobileS} {
            font-size: 27px;
        }
    }

    i:hover{
        transform: translateY(-3px) translateX(-2px);
    }
`