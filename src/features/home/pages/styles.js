import { variables } from '../../../constants/variables'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(170deg, ${variables.darkColor}, ${variables.mediumColor}, ${variables.lightColor}, ${variables.mediumColor}, ${variables.darkColor});
    padding: 15px;
    max-width: 1440px;
    height: 100vh;
    margin-top: 55px;
`