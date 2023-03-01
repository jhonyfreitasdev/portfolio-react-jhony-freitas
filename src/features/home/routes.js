import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { About } from "../about/pages";
import { Projects } from "../projects/pages";
import { Skills } from "../skills/pages";
import { Contact } from "../contact/pages";
 
export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<About />} />
            <Route exact path="/projetos" element={<Projects />} />
            <Route exact path="/habilidades" element={<Skills />} />
            <Route exact path="/contato" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)