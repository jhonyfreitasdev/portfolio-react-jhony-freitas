import styled from "styled-components"

export const Info = styled.div`
    position: absolute;
    display none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); 
    transition: 1s;
`

export const Gif = styled.img`
    transition: ease-in-out 0.7s;
    opacity: 0.7;
`

export const Title = styled.h2`
    font-size: 37px;
`

export const Description = styled.p`
    font-size: 22px;
    margin: 40px 0 30px 0;
`

export const Button = styled.a`
    display: inline-block;
    background-color: #ffffff;
    color: #000000;
    font-size: 18px;
    text-align: center;
    width 120px;
    padding: 7px 12px;
    margin: 0 15px;
    border-radius: 7px;
`

export const GifContainer = styled.div`
    position: relative;
    width: 1200px;
    height: 560px;
    border-radius: 7px;
    overflow: hidden;
    transition: ease-in-out 0.4s;

    &:hover {
        width: 1215px;
        height: 575px;
        ${Gif}{
            opacity: 0.3;
        }
        ${Info}{
            display:flex;
        }
    }
`