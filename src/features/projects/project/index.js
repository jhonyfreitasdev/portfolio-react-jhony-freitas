import { Skills } from "../skills" 
import { GifContainer, GifI, GifS,  Info, Title, Description, Button } from "./styles"


export const Project = ({item}) => {
    return (
        <GifContainer>
            <picture>
                <GifS media="(max-width: 425px)" srcSet={item.imageS} />
                <GifI src={item.image} alt="Imagem do projeto" />
            </picture>
            <Info>
                <Title>{ item.title }</Title>
                <Description>{ item.desc }</Description>

                <Skills skill1={item.skills[0]} skill2={item.skills[1]} skill3={item.skills[2]}/> 
                
                <div>
                    <Button href={item.repoLink} target="_blank" rel="noreferrer"> Repositório </Button>
                    <Button href={item.pageLink} target="_blank" rel="noreferrer"> Página </Button>
                </div>

            </Info>
        </GifContainer>
    )
}