import CodeCafe from "../../../_assets/gifs/projeto-code-cafe.gif";
// import Fylo from "../../../_assets/gifs/projeto-fylo.gif";
import { GifContainer, Gif, Info, Title, Description, Button } from "./styles"



export const Project = () => {
    return (
        <GifContainer>
            <Gif src={CodeCafe} alt="Gif de apresentação do projeto" />
            <Info>
                <Title>Code Café</Title>
                <Description> Lorem Lorem Lorem </Description>
                <div>
                    <Button href="#" target="_blank" rel="noreferrer"> Repositório </Button>
                    <Button href="#" target="_blank" rel="noreferrer"> Página </Button>
                </div>
            </Info>
        </GifContainer>
    )
}

