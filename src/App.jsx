import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTES
import ScrollToTop from "./components/ScrollToTop"; // Garante que a página volte ao topo ao mudar de rota
import CookieBanner from "./components/Cookies/CookieBanner";

// PÁGINAS
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Patrocinador from "./pages/Patrocinio"; // Verifique se o nome do arquivo está correto
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Faz a página rolar para o topo ao mudar de rota */}
      <CookieBanner /> {/* Banner de Cookies aparece em todas as páginas */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patrocinador" element={<Patrocinador />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
