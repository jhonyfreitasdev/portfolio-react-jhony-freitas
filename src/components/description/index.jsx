import curriculo from "../../_assets/files/JhonyFreitas_DevFrontEnd.pdf";
import './index.sass';

export const Description = () => {
    return (
        <div className="description-container">
            <p>
            Olá a todos! Meu nome é Jhony Freitas, tenho 23 anos e atuo como desenvolvedor front-end.
            </p>
            <p>
                Estudo programação desde 2022 e desde então atuo como freelancer na área, o que me foi útil para ganhar
                experiência e conhecimento suficiente para desenvolver projetos bem estruturados e solucionar problemas complexos.
            </p>
            <p>
                Autodidata por natureza, estou incessantemente em busca de conhecimento para aprimorar minhas habilidades. Essa abordagem resultou na construção de uma base sólida de conhecimento, capacitando-me a explorar com facilidade novos frameworks e tecnologias emergentes.
            </p>
            <p>
                Minha comunicação eficaz, habilidade inata para aprender e prontidão em reconhecer a necessidade de apoio quando preciso são aspectos que valorizo. Sou flexível, aberto a assimilar novos conceitos relevantes para o dia a dia e, acima de tudo, busco ser melhor a cada dia, provando que posso ser uma peça fundamental em qualquer equipe.
            </p>

            <a className="button-cv" href={curriculo} download="JhonyFreitas_DevFrontEnd" type="application/pdf" >
                Currículo
                <i className="fa-regular fa-circle-down"></i>
            </a>
        </div>
    )
}