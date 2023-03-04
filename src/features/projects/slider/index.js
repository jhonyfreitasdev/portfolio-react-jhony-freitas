import SetaEsquerda from "../../../_assets/images/seta-esquerda.png";
import SetaDireita from "../../../_assets/images/seta-direita.png";
import { Project } from "../project";
import { Container, SetaVoltar, SetaAvancar } from "./styles";

export const Slider = () => {
    return(
        <Container>
            <SetaVoltar href="#voltar"> <img src={SetaEsquerda} alt="Seta de voltar" /> </SetaVoltar>
            <Project fylo />
            <SetaAvancar> <img src={SetaDireita} alt="Seta de avançar" /> </SetaAvancar>
        </Container>
    )
}

// Criar styled component para carregar o Project de acordo com a prop
// A seta vai definir a prop pegando do Array
