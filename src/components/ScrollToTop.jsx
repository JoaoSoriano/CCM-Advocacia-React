import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0; // Para alguns navegadores móveis
      document.body.scrollTop = 0; // Para compatibilidade extra
    }, 100); // Pequeno delay para garantir que o scroll seja aplicado
  }, [pathname]);

  return null;
};

export default ScrollToTop;
