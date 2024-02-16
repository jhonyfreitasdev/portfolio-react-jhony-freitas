import { useState } from "react";
import { projectsList } from "../../objects/projects-list"
import { Project } from "../project";
import SetaEsquerda from "../../_assets/images/seta-esquerda.png";
import SetaDireita from "../../_assets/images/seta-direita.png";
import "./index.sass";

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
        <>
            <button type="button" className="return-button" onClick={prevProject}>
                <img src={SetaEsquerda} alt="Seta de voltar" />
            </button>

            <Project item={projectsList[item]} />
            
            <button type="button" className="advanced-button" onClick={skipProject}>
                <img src={SetaDireita} alt="Seta de avançar" /> 
            </button>
        </>
    )
}