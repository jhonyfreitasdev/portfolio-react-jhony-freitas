import { useState } from "react";
import { Link } from "react-router-dom";

import logo  from "../../_assets/images/logo.png"
import closeButton from "../../_assets/images/btn-fechar.png"
import menuIcon from "../../_assets/images/menu-icon.png"

import { Container, MenuIcon, Nav, CloseButton, List, DivLogo } from "./styles";
import "./styles.css"

export const MobileMenu = () => {
    //Open and close Nav Bar
    const [statusNavBar, setStatusNavBar] = useState("close")
    
    const openNavBar = () => {
        let copyStatusState = statusNavBar    
        copyStatusState = "open"
        setStatusNavBar(copyStatusState)
    }

    const closeNavBar = () => {
        let copyStatusState = statusNavBar    
        copyStatusState = "close"
        setStatusNavBar(copyStatusState)
    }

    //Use url path to mark page you are on 
    const [pathActive, setPathActive] = useState("/")
    
    const changePath = () => {
        let copyPathState = pathActive
        const path = window.location.pathname
        copyPathState = path
        setPathActive(copyPathState)

        closeNavBar()
    }
    
    const CustomLink = (props) => {
        return(
            <li className={props.path === props.to ? "active" : ""}>
                <Link to={props.to}> {props.children} </Link>
            </li>
        )
        
    }

    return(
        <Container>
            <MenuIcon onClick={openNavBar} type="button">
                <img src={menuIcon} alt="Botão do menu" />
            </MenuIcon>

            {
                statusNavBar === "close" ?
                <></> :
                <Nav>
                    <CloseButton onClick={closeNavBar} type="button"> 
                        <img src={closeButton} alt="Botão de fechar o menu" />
                    </CloseButton>

                    <List onClick={changePath}>
                        <CustomLink path={pathActive} to='/'>Inicio</CustomLink>
                        <CustomLink path={pathActive} to='/sobre'> Sobre </CustomLink>
                        <CustomLink path={pathActive} to='/projetos'> Projetos </CustomLink>
                        <CustomLink path={pathActive} to='/habilidades'> Habilidades </CustomLink>
                        <CustomLink path={pathActive} to='/contato'> Contato </CustomLink>
                    </List>
                </Nav>
            }
            <DivLogo>
                <img src={logo} alt="Logo do site"/>
            </DivLogo>
        </Container>

    )
}