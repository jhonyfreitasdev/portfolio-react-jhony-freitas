import { Nav } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css"

export const Menu = () => {
    const [pathActive, setPathActive] = useState("/")
    let copyState = pathActive
    
    const changePath = () => {
        const path = window.location.pathname
        copyState = path
        
        console.log(path);
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
        <Nav>
            <ul onClick={changePath}>
                <CustomLink path={pathActive} to='/'>Inicio</CustomLink>
                <CustomLink path={pathActive} to='/sobre'> Sobre </CustomLink>
                <CustomLink path={pathActive} to='/projetos'> Projetos </CustomLink>
                <CustomLink path={pathActive} to='/habilidades'> Habilidades </CustomLink>
                <CustomLink path={pathActive} to='/contato'> Contato </CustomLink>
            </ul>
        </Nav>
    )
}