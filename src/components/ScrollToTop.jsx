import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.pageYOffset > 0) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTop = 0; // Para compatibilidade extra
        document.body.scrollTop = 0;
      }, 50); // Pequeno delay para garantir a execução
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
