import { Skills } from "../skills"
import "./index.sass";

export const Project = ({ item }) => {
    return (
        <div className="project-container">
            <div className="picture-container">
                <picture>
                    <source className="source-gif" media="(max-width: 425px)" srcSet={item.imageS} />
                    <img className="image-gif" src={item.image} alt="Imagem do projeto" />
                </picture>
            </div>

            <div className="info">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.desc}</p>

                <Skills skill1={item.skills[0]} skill2={item.skills[1]} skill3={item.skills[2]} skill4={item.skills[3]} />

                {item.repoLink !== '' ?
                    <div>
                        <a className="button" href={item.repoLink} target="_blank" rel="noreferrer"> Repositório </a>
                        <a className="button" href={item.pageLink} target="_blank" rel="noreferrer"> Página </a>
                    </div>
                    :
                    <div>

                        <a className="button" href={item.pageLink} target="_blank" rel="noreferrer"> Página </a>
                    </div>
                }
            </div>
        </div>
    )
}