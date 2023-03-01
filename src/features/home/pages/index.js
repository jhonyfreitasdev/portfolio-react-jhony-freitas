import { Menu } from '../menu';
import { HomeContent } from '../home-content';
import { Container } from './styles';

export const Home = () => {
    return(
        <Container>
            <Menu />
            <HomeContent />
        </Container>
    )
}