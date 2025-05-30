import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// COMPONENTES
import ScrollToTop from "./components/ScrollToTop"; // Garante que a página volte ao topo ao mudar de rota
import CookieBanner from "./components/Cookies/CookieBanner";

// PÁGINAS
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Patrocinador from "./pages/Patrocinio";
import CookiePolicy from "./pages/CookiePolicy";
import Loja from "./pages/Loja";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patrocinador" element={<Patrocinador />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/loja" element={<Loja />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
