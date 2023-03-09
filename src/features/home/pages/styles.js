import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(170deg, ${props => props.theme.color04}, ${props => props.theme.color03}, ${props => props.theme.color05}, ${props => props.theme.color03});
    padding: 15px;
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
`