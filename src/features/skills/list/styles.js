import styled from "styled-components";

export const IconList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;

    li{
        text-align: center;
        transition: ease-in-out 0.5s ;
        min-height: 166px;
    }

    i{
        font-size: 70px;
        padding-bottom: 10px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #00000020;
    transition: ease-in-out 0.5s ;
    border-radius: 10px;
    border: 1px solid #00000030;
    padding: 15px;
    height: 100%;
    width: 110px;
`

export const Info = styled.div`

`

export const ContainerImg = styled.div`
    width: 80px;
`

export const Javascript = styled.li`
    i { color: #ffff00; }
    h4 { text-shadow: 0 0 10px #ffff00; }
`

export const React = styled.li`
    i { color: #61DAFB; }
    h4 { text-shadow: 0 0 10px #61DAFB; }
`

export const Git = styled.li`
    i { color: #ff6600; }
    h4 { text-shadow: 0 0 10px #ff6600; }
`

export const Html = styled.li`
    i { color: #ec4305; }
    h4 { text-shadow: 0 0 10px #ec4305; }
`

export const Css = styled.li`
    i { color: #0084ff; }
    h4 { text-shadow: 0 0 10px #0084ff; }
`

export const Github = styled.li`
    i { color: #deb887; }
    h4 { text-shadow: 0 0 10px #deb887; }
`

export const Jest = styled.li`
    img { width: 60px; }
    h4 { text-shadow: 0 0 10px #c63d14; }
`

export const Styled = styled.li`
    h4 { text-shadow: 0 0 10px #9A5F85; }
`

export const MySQL = styled.li`
    h4 { text-shadow: 0 0 10px #00618A; }
`