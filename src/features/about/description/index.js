import curriculo from "../../../_assets/files/Jhony_Freitas-cv.pdf";
import { Container, ButtonCv } from "./styles"

export const Description = () => {
    return(
        <Container>
            <p>
                Olá a todos! Me chamo Jhony Freitas, tenho 22 anos e sou um desenvolvedor front-end.
            </p>
            <p>
                Meu trabalho é mais especializado na criação de sites, desde a parte de montar a estrutura, organizar informações, estilizar o layout, e deixar ele bem funcional.
            </p>
            <p>
                Quando escolhi a área de programação me falaram que eu precisaria gostar de resolver problemas, pois muitos viriam pela frente, e foi quando eu resolvi meu primeiro problema que descobri que era apaixonado por aquilo, a satisfação e o amor em codar não tem explicação.
            </p>
            <p>
                Sei que como júnior não vou entrar na empresa sabendo tudo, mas estou disposto a perguntar e estudar o máximo possível para fazer a diferença. E também sei que serei útil e de grande valor, pois busco sempre ajudar no crescimento de onde eu trabalho, para que eu possa crescer também pessoalmente e profissionalmente.
            </p>
            <p>
                Sou muito flexível em aprender tanto linguagens e softwares novos quanto para me adaptar a rotina de trabalho, além de ser proativo e ter facilidade em aprender.
            </p>
            
            <ButtonCv href={curriculo} download="Currículo Jhony Freitas" type="application/pdf" >
                Currículo
                <i className="fa-regular fa-circle-down"></i>
            </ButtonCv>
        </Container>
    )
}