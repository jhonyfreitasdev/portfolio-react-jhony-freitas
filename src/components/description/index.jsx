import curriculo from "../../_assets/files/JhonyFreitas_DevFrontEnd.pdf";
import './index.sass';

export const Description = () => {
    return(
        <div className="description-container">
            <p>
                Olá a todos! Me chamo Jhony Freitas, tenho 23 anos e sou um desenvolvedor front-end.
            </p>
            <p>
                Sou desenvolvedor desde 2022 e, embora sinta que já percorri um longo percurso, ainda estou iniciando minha jornada na programação. A caminhada será longa e desafiadora, mas esse é um dos motivos que me incentivou a escolher essa área, pois tenho uma enorme sede por conhecimento e é empolgante saber que ela pode ser saciada nesse vasto mundo que é a tecnologia.
            </p>
            <p>
                Sou uma pessoa autodidata e estou sempre a procura de intensivos, cursos e documentações para me aprimorar cada vez mais, o que fez eu criar uma base sólida de conhecimento que possibilita que eu me aprofunde facilmente em novos frameworks e tecnologias mais tendentes.
            </p>
            <p>
                Tenho uma boa comunicação, facilidade em aprender e em reconhecer que preciso de ajuda quando necessário. Sou flexível, estou disposto a aprender coisas novas que sejam importantes no cotidiano e, acima de tudo, busco sempre ser melhor hoje do que eu fui ontem, me dando a certeza de que serei de extrema importância em qualquer equipe.
            </p>
            
            <button className="button-cv" href={curriculo} download="Currículo Jhony Freitas" type="application/pdf" >
                Currículo
                <i className="fa-regular fa-circle-down"></i>
            </button>
        </div>
    )
}