import { Description } from "../../components/description";
import "./index.sass";

export const About = () => {
    return(
        <div className="about-container">
            <div className="blur-overlay"></div>
            <div className="image"></div>
            <Description />
        </div>
    )
}