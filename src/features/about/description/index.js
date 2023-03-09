import curriculo from "../../../_assets/files/Jhony_Freitas-cv.pdf";
import { Container, ButtonCv } from "./styles"

export const Description = () => {
    return(
        <Container>
            <p>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para arrastar e soltar em qualquer lugar em sua página. Sou um ótimo lugar para você contar sua história.</p>
            <p>Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a ideia de iniciar o seu negócio e o que o torna diferente de seus competidores. Faça com que sua empresa se destaque e mostre quem você é.</p>
            <p>Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a ideia de iniciar o seu negócio e o que o torna diferente de seus competidores. Faça com que sua empresa se destaque e mostre quem você é.</p>
            
            <ButtonCv href={curriculo} download="Currículo Jhony Freitas" type="application/pdf" >
                Currículo
                <i className="fa-regular fa-circle-down"></i>
            </ButtonCv>
        </Container>
    )
}