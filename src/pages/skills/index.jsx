import { SkillList } from "../../components/skill-list";
import './index.sass';

export const Skills = () => {
    return(
        <div className="skills-container">
            <div className='blur-overlay'></div>
            <SkillList />
        </div>
    )
}