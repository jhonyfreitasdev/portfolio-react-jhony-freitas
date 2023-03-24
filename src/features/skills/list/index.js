import jest from "../../../_assets/images/jest-icon.png"
import styled from "../../../_assets/images/styled-icon.png"
import mysql from "../../../_assets/images/mysql-icon.png"

import { IconList, Card, Info, ContainerImg, Javascript, React, Git, Html, Css, Github, Jest, Styled, MySQL } from "./styles"

export const List = () => {
    return (
        <IconList>
            <Javascript>
                <Card>
                    <i className="fa-brands fa-js"></i>
                    <Info>
                        <h4>JavaScript</h4>
                        <p></p>
                    </Info>
                </Card>
            </Javascript>
            <React>
                <Card>
                    <i className="fa-brands fa-react"></i>
                    <Info>
                        <h4>React JS</h4>
                        <p></p>
                    </Info>
                </Card>
            </React>
            <Git>
                <Card>
                    <i className="fa-brands fa-git-alt"></i>
                    <Info>
                        <h4>Git</h4>
                        <p></p>
                    </Info>
                </Card>
            </Git>
            <Html>
                <Card>
                    <i className="fa-brands fa-html5"></i>
                    <Info>
                        <h4>HTML</h4>
                        <p></p>
                    </Info>
                </Card>
            </Html>
            <Css>
                <Card>
                    <i className="fa-brands fa-css3-alt"></i>
                    <Info>
                        <h4>CSS</h4>
                        <p></p>
                    </Info>
                </Card >
            </Css>
            <Github>
                <Card>
                    <i className="fa-brands fa-github"></i>
                    <Info>
                        <h4>GitHub</h4>
                        <p></p>
                    </Info>
                </Card >
            </Github>
            <Jest>
                <Card>
                    <ContainerImg>
                        <img src={jest} alt="Ícone do Jest" />
                    </ContainerImg>
                    <Info>
                        <h4>Jest</h4>
                        <p></p>
                    </Info>
                </Card >
            </Jest>
            <Styled>
                <Card>
                    <ContainerImg>
                        <img src={styled} alt="Ícone do Styled Components" />
                    </ContainerImg>
                    <Info>
                        <h4>Styled Components</h4>
                        <p></p>
                    </Info>
                </Card >
            </Styled>
            <MySQL>
                <Card>
                    <ContainerImg>
                        <img src={mysql} alt="Ícone do My SQL" />
                    </ContainerImg>
                    <Info>
                        <h4>My SQL</h4>
                        <p></p>
                    </Info>
                </Card >
            </MySQL>
        </IconList >
    )
}