import styled from 'styled-components';
import { variables } from "../../../constants/variables"
import { device } from '../../../constants/device';

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 98%;
    width: 100%;
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    @media ${device.tabletS} {
        width: 100%;
    }
    @media ${device.mobileL} {
        align-items: flex-start;
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobileL}{
        justify-content: flex-start;
        padding-top: 150px;
    }

    p{
        display: flex;
        align-items: center;
        font-family: ${variables.secondaryFont};
        font-size: 22px;

        @media ${device.laptop} {
            font-size: 17px;
        }
        @media ${device.tablet} {
            font-size: 15px;
        }
    }

    img{
        width: 35px;
    }

    h1{ 
        font-size: 65px;
        
        @media ${device.laptop} {
            font-size: 50px;
        }
        @media ${device.tablet} {
            font-size: 42px;
        }
    }
    
    h3{ 
        font-size: 29px; 
        
        @media ${device.laptop} {
            font-size: 24px;
        }
        @media ${device.tablet} {
            font-size: 19px;
        }
    }
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 60%;

    
    @media ${device.laptop} {
        width: 55%;
    }
    @media ${device.tablet} {
        width: 50%;
    }
    @media ${device.tabletS} {
        display: none;
    }
`