import { useState } from "react"

import jest from "../../_assets/images/jest-icon.png"
import styled from "../../_assets/images/styled-icon.png"
import mysql from "../../_assets/images/mysql-icon.png"
import typescript from "../../_assets/images/ts-icon.png"
import redux from "../../_assets/images/redux-icon.png"
import sass from "../../_assets/images/sass-icon.png"

import "./index.sass";

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

        <ul className="icon-list" onClick={clearState}>
            <li className={"react" === selected ? "react active-card" : "react"} onClick={selectCard}>
                <div className="card" id="react">
                    <i className="fa-brands fa-react"></i>
                    <div className="info">
                        <h4>React JS</h4>
                        <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                    </div>
                </div>
            </li>

            <li className={"javascript" === selected ? "javascript active-card" : "javascript"} onClick={selectCard}>
                <div className="card" id="javascript">
                    <i className="fa-brands fa-js"></i>
                    <div className="info">
                        <h4>JavaScript</h4>
                        <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                    </div>
                </div>
            </li>

            <li className={"typescript" === selected ? "typescript active-card" : "typescript"} onClick={selectCard}>
                <div className="card" id="typescript">
                    <div className="image-container">
                        <img src={typescript} alt="Ícone do TS" />
                    </div>
                    <div className="info">
                        <h4>TypeScript</h4>
                        <p> TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
                    </div>
                </div>
            </li>

            <li className={"redux" === selected ? "redux active-card" : "redux"} onClick={selectCard}>
                <div className="card" id="redux">
                    <div className="image-container">
                        <img src={redux} alt="Ícone do TS" />
                    </div>
                    <div className="info">
                        <h4>Redux</h4>
                        <p> Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.</p>
                    </div>
                </div>
            </li>

            <li className={"git" === selected ? "git active-card" : "git"} onClick={selectCard}>
                <div className="card" id="git">
                    <i className="fa-brands fa-git-alt"></i>
                    <div className="info">
                        <h4>Git</h4>
                        <p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>
                    </div>
                </div>
            </li>

            <html className={"html" === selected ? "html active-card" : "html"} onClick={selectCard}>
                <div className="card" id="html">
                    <i className="fa-brands fa-html5"></i>
                    <div className="info">
                        <h4>HTML</h4>
                        <p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>
                    </div>
                </div>
            </html>

            <li className={"css" === selected ? "css active-card" : "css"} onClick={selectCard}>
                <div className="card" id="css">
                    <i className="fa-brands fa-css3-alt"></i>
                    <div className="info">
                        <h4>CSS</h4>
                        <p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style.</p>
                    </div>
                </div>
            </li>

            <li className={"sass" === selected ? "sass active-card" : "sass"} onClick={selectCard}>
                <div className="card" id="sass">
                    <div className="image-container">
                        <img src={sass} alt="Ícone do TS" />
                    </div>
                    <div className="info">
                        <h4>Sass</h4>
                        <p> Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum.</p>
                    </div>
                </div>
            </li>

            <li className={"github" === selected ? "github active-card" : "github"} onClick={selectCard}>
                <div className="card" id="github">
                    <i className="fa-brands fa-github"></i>
                    <div className="info">
                        <h4>GitHub</h4>
                        <p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</p>
                    </div>
                </div>
            </li>

            <li className={"jest" === selected ? "jest active-card" : "jest"} onClick={selectCard}>
                <div className="card" id="jest">
                    <div className="image-container">
                        <img src={jest} alt="Ícone do Jest" />
                    </div>
                    <div className="info">
                        <h4>Jest</h4>
                        <p>Jest é uma estrutura de teste de JavaScript construída sobre o Jasmine e mantida pela Meta. Funciona com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e Svelte.</p>
                    </div>
                </div>
            </li>

            <li className={"styled" === selected ? "styled active-card" : "styled"} onClick={selectCard}>
                <div className="card" id="styled">
                    <div className="image-container">
                        <img src={styled} alt="Ícone do Styled Components" />
                    </div>
                    <div className="info">
                        <h4>Styled Components</h4>
                        <p>O Styled Components é uma biblioteca do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript.</p>
                    </div>
                </div>
            </li>

            <li className={"mysql" === selected ? "mysql active-card" : "mysql"} onClick={selectCard}>
                <div className="card" id="mysql">
                    <div className="image-container">
                        <img src={mysql} alt="Ícone do My SQL" />
                    </div>
                    <div className="info">
                        <h4>My SQL</h4>
                        <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}