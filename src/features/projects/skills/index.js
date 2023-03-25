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
const react = {
    id: 'React',
    icon: <i className="fa-brands fa-react"></i>
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
        <ul>
            {
                list.map((item, index) => {
                    return(
                        <li key={index}>
                            {item.icon}
                        </li>
                    )
                })
            }
        </ul>
    )
}