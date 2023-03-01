import { List } from "./styles"

export const SocialMedia = () => {
    return(
        <List>
            <li>
                <a href="https://www.linkedin.com/in/jhony-freitas/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/jhonyfreitasdev" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="mailto:jhony00._@hotmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=5511948127577&text" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_jhonyfreitass/?hl=pt-br" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
        </List>
    )
}