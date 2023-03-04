import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const SetaVoltar = styled.a`
    position: absolute;
    top: 50%;
    left: 2%;
    z-index: 1;

    img { width: 20px; }
`

export const SetaAvancar = styled.a`
    position: absolute;
    top: 50%;
    right: 2%;
    z-index: 1;

    img { width: 20px; }
`