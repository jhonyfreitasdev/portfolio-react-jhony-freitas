import fotoPerfil from "../../../_assets/images/foto.png";
import { Container, DivImage } from "./styles"

export const Image = () => {
    return(
        <Container>
            <DivImage>
                <img src={fotoPerfil} alt="Foto do Jhony"/>
            </DivImage>
        </Container>
    )
}