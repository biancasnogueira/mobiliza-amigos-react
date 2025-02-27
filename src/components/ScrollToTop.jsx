import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Volta para o topo ao mudar de página
  }, [pathname]);

  return null;
};

export default ScrollToTop;
