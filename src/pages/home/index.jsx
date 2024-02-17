import { HomeContent } from '../../components/home-content';
import "./index.sass";

export const Home = () => {
    return (
        <div class="home-container">
            <div className='blur-overlay'></div>
            <HomeContent />
        </div>
    )
}