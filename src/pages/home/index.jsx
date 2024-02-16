import { HomeContent } from '../../components/home-content';
import "./index.sass"

export const Home = () => {
    return (
        <div class="container">
            <div className='blur-background'></div>

            <div className='container-home'>
                <HomeContent />
            </div>
        </div>
    )
}