import { List, ListItem, Html, Css, Javascript, TypeScript, React, Styled, Sass, Jest } from "./styles"

import StyledIcon from "../../../_assets/images/styled-icon.png" 
import JestIcon from "../../../_assets/images/jest-icon.png"
import TypeScriptIcon from "../../../_assets/images/ts-icon.png"
import SassIcon from "../../../_assets/images/sass-icon.png"

const html = {
    id: 'HTML',
    icon: <Html className="fa-brands fa-html5"></Html>
}
const css = {
    id: 'CSS',
    icon: <Css className="fa-brands fa-css3-alt"></Css>
}
const javascript = {
    id: 'JavaScript',
    icon: <Javascript className="fa-brands fa-js"></Javascript>
}
const typescript ={
    id: 'TypeScript',
    icon: <TypeScript> <img src={TypeScriptIcon} alt="" /> </TypeScript>
}
const react = {
    id: 'React',
    icon: <React className="fa-brands fa-react"></React>
}
const styled = {
    id: 'Styled Components',
    icon: <Styled> <img src={StyledIcon} alt="" /> </Styled>
}
const sass ={
    id: 'Sass',
    icon: <Sass> <img src={SassIcon} alt="" /> </Sass>
}
const jest ={
    id: 'Jest',
    icon: <Jest> <img src={JestIcon} alt="" /> </Jest>
}

export const Skills = ({ skill1, skill2, skill3, skill4 }) => {
    const icons = [skill1, skill2, skill3, skill4]
    const images = [jest, css, html, styled, sass, typescript, javascript, react]
    let list = []

    images.map(image => {
        return (
            icons.forEach(icon => {
                if (image.id === icon) {
                    list = [image, ...list]
                }
            })
        )
    })

    return (
        <List>
            {
                list.map((item, index) => {
                    return(
                        <ListItem key={index}>
                            {item.icon}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}