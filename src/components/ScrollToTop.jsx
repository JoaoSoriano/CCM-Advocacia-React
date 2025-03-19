import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Sempre rola para o topo ao mudar de rota
  }, [pathname]);

  return null;
};

export default ScrollToTop;
