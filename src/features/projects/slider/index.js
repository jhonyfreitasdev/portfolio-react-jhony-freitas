import { useState } from "react";
import { projectsList } from "../objects/projects-list"

import SetaEsquerda from "../../../_assets/images/seta-esquerda.png";
import SetaDireita from "../../../_assets/images/seta-direita.png";

import { Project } from "../project";
import { Container, SetaVoltar, SetaAvancar } from "./styles";

export const Slider = () => {
    const [item, setItem] = useState(0)

    const skipProject = () => {
        let copyState = item
        if(copyState === projectsList.length -1 ){
            return
        }else{
            copyState = copyState + 1
            setItem(copyState)
        }
    }

    const prevProject = () => {
        let copyState = item
        if (copyState === 0){
            return
        }else{
            copyState = copyState - 1 
            setItem(copyState)
        } 
    }

    return(
        <Container>
            <SetaVoltar type="button" onClick={prevProject}>
                <img src={SetaEsquerda} alt="Seta de voltar" />
            </SetaVoltar>

            <Project item={projectsList[item]} />
            
            <SetaAvancar type="button" onClick={skipProject}>
                <img src={SetaDireita} alt="Seta de avançar" /> 
            </SetaAvancar>
        </Container>
    )
}