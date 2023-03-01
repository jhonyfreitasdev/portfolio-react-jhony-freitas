import { Description } from "../description";
import { Image } from "../profile-image";
import { Container} from "./styles";

export const About = () => {
    return(
        <Container>
            <Description />
            <Image />
        </Container>
    )
}