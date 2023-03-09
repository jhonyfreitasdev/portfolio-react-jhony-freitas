import styled from "styled-components";

export const Container = styled.div`
    position: relative; 
    background: linear-gradient(170deg, ${props => props.theme.color04}, ${props => props.theme.color03}, ${props => props.theme.color05}, ${props => props.theme.color03});    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
`