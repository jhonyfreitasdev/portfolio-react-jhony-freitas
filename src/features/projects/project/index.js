import { GifContainer, Gif, Info, Title, Description, Button } from "./styles"

export const Project = ({item}) => {
    return (
        <GifContainer>
            <Gif src={ item.image } alt="Gif de apresentação do projeto" />
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

