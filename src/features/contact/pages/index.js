import { SocialMedia } from "../social-media"
import { Form } from "../form"
import { Container, H2, P } from "./styles"

export const Contact = () => {
    return(
        <Container> 
            <H2>Gostou do que viu? Entre em contato!</H2>
            <SocialMedia />
            <Form />
            <P>Desenvolvedor Front-end</P>
        </Container>
    )
}