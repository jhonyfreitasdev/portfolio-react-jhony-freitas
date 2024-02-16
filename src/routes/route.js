import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/menu"
import { MobileMenu } from "../components/mobile-menu"
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Projects } from "../pages/projects";
import { Skills } from "../pages/skills";
import { Contact } from "../pages/contact";

export const AppRoutes = () => (
    <BrowserRouter>
        <Menu />
        <MobileMenu />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<About />} />
            <Route exact path="/projetos" element={<Projects />} />
            <Route exact path="/habilidades" element={<Skills />} />
            <Route exact path="/contato" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)