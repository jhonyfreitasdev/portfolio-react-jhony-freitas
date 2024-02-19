import { Slider } from '../../components/slider'
import "./index.sass";

export const Projects = () => {
    return(
        <div className="projects-container">
            <div className='blur-overlay'></div>
            <Slider />
        </div>
    )
};