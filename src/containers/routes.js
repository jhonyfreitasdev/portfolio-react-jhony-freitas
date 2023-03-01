import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/menu"
import { Home } from "../features/home/pages";
import { About } from "../features/about/pages";
import { Projects } from "../features/projects/pages";
import { Skills } from "../features/skills/pages";
import { Contact } from "../features/contact/pages";
 
export const AppRoutes = () => (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<About />} />
            <Route exact path="/projetos" element={<Projects />} />
            <Route exact path="/habilidades" element={<Skills />} />
            <Route exact path="/contato" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)