import fundoPrincipal from "../../../_assets/images/fundo-principal.png";
import { DivContainer, ContainerInfo, DivInfo, ContainerImg } from "./styles"
 
export const HomeContent = () => {
    return (
        <DivContainer>
            <ContainerInfo>
                <DivInfo>
                    <p>Olá!
                        <img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="Mão acenando"/>
                    eu sou</p>
                    
                    <h1>Jhony Freitas</h1>
                    <h3>Desenvolvedor Front-end</h3>
                </DivInfo>
            </ContainerInfo>
            <ContainerImg>
                    <img src={fundoPrincipal} alt="Imagem animada de programador" />
            </ContainerImg>
        </DivContainer>
    )
}