import { IconList, Javascript, React, Git, Html, Css, Github } from "./styles"

export const List = () => {
    return (
        <IconList>
            <Javascript>
                <i className="fa-brands fa-js"></i>
                <h4>JavaScript</h4>
            </Javascript>
            <React>
                <i className="fa-brands fa-react"></i>
                <h4>React JS</h4>
            </React>
            <Git>
                <i className="fa-brands fa-git-alt"></i>
                <h4>Git</h4>
            </Git>
            <Html>
                <i className="fa-brands fa-html5"></i>
                <h4>HTML 5</h4>
            </Html>
            <Css>
                <i className="fa-brands fa-css3-alt"></i>
                <h4>CSS 3</h4>
            </Css>
            <Github>
                <i className="fa-brands fa-github"></i>
                <h4>GitHub</h4>
            </Github>
        </IconList>
    )
}