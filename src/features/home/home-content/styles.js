import styled from 'styled-components';
import { variables } from "../../../constants/variables"

export const DivContainer = styled.div`
    display: flex;
    height: 90%;
    width: 100%;
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        display: flex;
        align-items: center;
        font-family: ${variables.secondaryFont};
        font-size: 22px;
    }

    img{ width: 35px; }

    h1{ font-size: 70px; }

    h3{ font-size: 29px; }
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
`