import { List, ListItem, Html, Css, Javascript, React } from "./styles"

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
const react = {
    id: 'React',
    icon: <React className="fa-brands fa-react"></React>
}

export const Skills = ({ skill1, skill2, skill3, skill4 }) => {
    const icons = [skill1, skill2, skill3, skill4]
    const images = [html, css, javascript, react]
    let list = []

    images.map(image => {
        return (
            icons.forEach(icon => {
                console.log(image.id);
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