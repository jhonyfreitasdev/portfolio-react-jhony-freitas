import { Nav } from "./styles";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <Nav>
            <ul>
                <li><Link to='/'> Inicio </Link></li>
                <li><Link to='/sobre'> Sobre </Link></li>
                <li><Link to='/projetos'> Projetos </Link></li>
                <li><Link to='/habilidades'> Habilidades </Link></li>
                <li><Link to='/contato'> Contato </Link></li>
            </ul>
        </Nav>
    )
}