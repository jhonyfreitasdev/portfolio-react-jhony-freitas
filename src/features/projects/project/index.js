import { GifContainer, Gif } from "./styles"

export const Project = (props) => {
    return(
        <>
            <GifContainer>
                <Gif src={props.gif} alt="Gif de apresentação do projeto" />
            </GifContainer>
        </>
    )
}