import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.sass"

export const Menu = () => {
    const [pathActive, setPathActive] = useState("/")
    
    const changePath = () => {
        let copyState = pathActive
        const path = window.location.pathname
        copyState = path
        setPathActive(copyState)
    }
    
    const CustomLink = (props) => {
        return(
            <li className={props.path === props.to ? "active" : ""}>
                <Link to={props.to}> {props.children} </Link>
            </li>
        )
        
    }

    return(
        <header>
            <nav className="navigation">
                <ul className="list" onClick={changePath}>
                    <CustomLink path={pathActive} to='/'>Inicio</CustomLink>
                    <CustomLink path={pathActive} to='/sobre'> Sobre </CustomLink>
                    <CustomLink path={pathActive} to='/projetos'> Projetos </CustomLink>
                    <CustomLink path={pathActive} to='/habilidades'> Habilidades </CustomLink>
                    <CustomLink path={pathActive} to='/contato'> Contato </CustomLink>
                </ul>
            </nav>
        </header>
    )
}