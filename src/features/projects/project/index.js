import { GifContainer, Info, Title, Description, Button } from "./styles"


export const Project = ({item}) => {
    return (
        <GifContainer>
            <picture>
                <source media="(max-width: 425px)" srcSet={item.imageS} />
                <img src={item.image} alt="Imagem do projeto" />
            </picture>
            <Info>
                <Title>{ item.title }</Title>
                <Description>{ item.desc }</Description>
                <div>
                    <Button href={item.repoLink} target="_blank" rel="noreferrer"> Repositório </Button>
                    <Button href={item.pageLink} target="_blank" rel="noreferrer"> Página </Button>
                </div>
            </Info>
        </GifContainer>
    )
}