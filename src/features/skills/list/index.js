import { useState } from "react"

import jest from "../../../_assets/images/jest-icon.png"
import styled from "../../../_assets/images/styled-icon.png"
import mysql from "../../../_assets/images/mysql-icon.png"
import { IconsList, Card, Info, ContainerImg, Javascript, React, Git, Html, Css, Github, Jest, Styled, MySQL } from "./styles"
import "./styles.css"

export const List = () => {
    const [selected, setSelected] = useState("")

    const selectCard = (e) => {
        setSelected(e.target.id)
    }

    const clearState = () => {
        if (selected !== "") {
            setSelected("")
        }
    }

    return (
        
        <IconsList onClick={clearState}>
            <Javascript className={"javascript" === selected ? "active-card" : ""} onClick={selectCard}>  
                <Card id="javascript">
                    <i className="fa-brands fa-js"></i>
                    <Info>
                        <h4>JavaScript</h4>
                        <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                    </Info>
                </Card>
            </Javascript>
            <React className={"react" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="react">
                    <i className="fa-brands fa-react"></i>
                    <Info>
                        <h4>React JS</h4>
                        <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                    </Info>
                </Card>
            </React>
            <Git className={"git" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="git">
                    <i className="fa-brands fa-git-alt"></i>
                    <Info>
                        <h4>Git</h4>
                        <p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>
                    </Info>
                </Card>
            </Git>
            <Html className={"html" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="html">
                    <i className="fa-brands fa-html5"></i>
                    <Info>
                        <h4>HTML</h4>
                        <p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>
                    </Info>
                </Card>
            </Html>
            <Css className={"css" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="css">
                    <i className="fa-brands fa-css3-alt"></i>
                    <Info>
                        <h4>CSS</h4>
                        <p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style.</p>
                    </Info>
                </Card >
            </Css>
            <Github className={"github" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="github">
                    <i className="fa-brands fa-github"></i>
                    <Info>
                        <h4>GitHub</h4>
                        <p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p>
                    </Info>
                </Card >
            </Github>
            <Jest className={"jest" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="jest">
                    <ContainerImg>
                        <img src={jest} alt="Ícone do Jest" />
                    </ContainerImg>
                    <Info>
                        <h4>Jest</h4>
                        <p>Jest é uma estrutura de teste de JavaScript construída sobre o Jasmine e mantida pela Meta. Funciona com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e Svelte.</p>
                    </Info>
                </Card >
            </Jest>
            <Styled className={"styled" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="styled">
                    <ContainerImg>
                        <img src={styled} alt="Ícone do Styled Components" />
                    </ContainerImg>
                    <Info>
                        <h4>Styled Components</h4>
                        <p>O Styled Components é uma biblioteca do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript.</p>
                    </Info>
                </Card >
            </Styled>
            <MySQL className={"mysql" === selected ? "active-card" : ""} onClick={selectCard}>
                <Card id="mysql">
                    <ContainerImg>
                        <img src={mysql} alt="Ícone do My SQL" />
                    </ContainerImg>
                    <Info>
                        <h4>My SQL</h4>
                        <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation</p>
                    </Info>
                </Card >
            </MySQL>
        </IconsList >
    )
}