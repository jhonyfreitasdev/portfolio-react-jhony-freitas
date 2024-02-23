import StyledIcon from "../../_assets/images/styled-icon.png";
import JestIcon from "../../_assets/images/jest-icon.png";
import TypeScriptIcon from "../../_assets/images/ts-icon.png";
import SassIcon from "../../_assets/images/sass-icon.png";
import "./index.sass"

const html = {
    id: 'HTML',
    icon: <i className="fa-brands fa-html5"></i>
}
const css = {
    id: 'CSS',
    icon: <i className="fa-brands fa-css3-alt"></i>
}
const javascript = {
    id: 'JavaScript',
    icon: <i className="fa-brands fa-js"></i>
}
const typescript ={
    id: 'TypeScript',
    icon: <i className="typescript"> <img src={TypeScriptIcon} alt=""/> </i>
}
const react = {
    id: 'React',
    icon: <i className="fa-brands fa-react"></i>
}
const styled = {
    id: 'Styled Components',
    icon: <i className="styled"> <img src={StyledIcon} alt="" /> </i>
}
const sass ={
    id: 'Sass',
    icon: <i className="sass"> <img src={SassIcon} alt="" /> </i>
}
const jest ={
    id: 'Jest',
    icon: <i className="jest"> <img src={JestIcon} alt="" /> </i>
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
        <ul className="skill-list">
            {
                list.map((item, index) => {
                    return(
                        <li className="item" key={index}>
                            {item.icon}
                        </li>
                    )
                })
            }
        </ul>
    )
}