import styled from "styled-components";

export const IconList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;

    li{
        text-align: center;
    }

    i{
        font-size: 70px;
        padding-bottom: 10px;
    }
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