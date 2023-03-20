import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SetaVoltar = styled.button`
    position: absolute;
    background-color: #00000000;
    cursor: pointer;
    top: 50%;
    left: 2%;
    z-index: 1;

    img { width: 20px; }
`

export const SetaAvancar = styled.button`
    position: absolute;
    background-color: #00000000;
    cursor: pointer;
    top: 50%;
    right: 2%;
    z-index: 1;

    img { width: 20px; }
`