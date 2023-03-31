import styled from "styled-components";
import { device } from "../../../constants/device";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    @media ${device.mobileS} {
        flex-wrap: wrap;
    }

    li{ 
        margin: 15px; 

        @media ${device.mobileS} {
            margin: 10px;
        }
    }
        
    i{ 
        font-size: 40px; 
        transition: 0.3s ease-in-out;
        text-shadow: 5px 6px 18px #00000099;

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