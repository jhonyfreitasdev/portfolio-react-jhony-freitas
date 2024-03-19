import { useState } from "react";
import { Link } from "react-router-dom";

import logo  from "../../_assets/images/logo.png"
import closeButton from "../../_assets/images/btn-fechar.png"
import menuIcon from "../../_assets/images/menu-icon.png"

import "./index.sass";

export const MobileMenu = () => {
    //Open and close Nav Bar
    const [statusNavBar, setStatusNavBar] = useState(false)
    
    const handleNavBar = () => { setStatusNavBar(!statusNavBar); };

    //Use url path to mark page you are on 
    const [pathActive, setPathActive] = useState("/")
    
    const changePath = () => {
        const path = window.location.pathname
        setPathActive(path)

        setStatusNavBar(false)
    }
    
    const CustomLink = (props) => {
        return(
            <li className={props.path === props.to ? "active" : ""}>
                <Link to={props.to}> {props.children} </Link>
            </li>
        )
    }

    return(
        <header className="mobile-menu-container">
            {!statusNavBar && (
                <button className="menu-icon" onClick={handleNavBar} type="button">
                    <img src={menuIcon} alt="Botão do menu" />
                </button>
            )}
            
            {statusNavBar && (
                <nav className="menu-navigation">
                    <button className="close-button" onClick={handleNavBar} type="button"> 
                        <img src={closeButton} alt="Botão de fechar o menu" />
                    </button>

                    <ul className="list" onClick={changePath}>
                        <CustomLink path={pathActive} to='/'>Inicio</CustomLink>
                        <CustomLink path={pathActive} to='/sobre'> Sobre </CustomLink>
                        <CustomLink path={pathActive} to='/projetos'> Projetos </CustomLink>
                        <CustomLink path={pathActive} to='/habilidades'> Habilidades </CustomLink>
                        <CustomLink path={pathActive} to='/contato'> Contato </CustomLink>
                    </ul>
                </nav>
            )}
    
            <div className="logo">
                <img src={logo} alt="Logo do site"/>
            </div>
        </header>

    )
}