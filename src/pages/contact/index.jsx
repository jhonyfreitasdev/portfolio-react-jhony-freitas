import { SocialMedia } from "../../components/social-media";
import { Form } from "../../components/form";
import "./index.sass";

export const Contact = () => {
    return(
        <div className="contact-container"> 
            <h2 className="title">Gostou do que viu? Entre em contato!</h2>
            <SocialMedia />
            <Form />
            <p className="paragraph">Desenvolvedor Front-end</p>
        </div>
    )
};