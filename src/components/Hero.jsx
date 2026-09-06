import { useEffect, useRef, useState } from "react";
import "../styles/hero.css";
import video from "../img/DroneVideo .mp4";

/* O vídeo tem 12 MB e não tinha poster: numa conexão ruim a home abria só com o
   gradiente sobre fundo chapado até o buffer encher. Duas medidas resolvem isso
   sem tocar no vídeo em si.

   1. O poster (264 KB) garante que sempre há cena por trás do texto — se o
      vídeo nunca chegar, ele permanece e ninguém vê fundo liso. Vive em
      /public, e não em src/img, para ter URL estável: assim o index.html
      consegue dar `preload` nele e o download começa antes do JS rodar.
   2. O `src` só é atribuído depois do `load` da janela. Antes, os 12 MB
      disputavam banda com CSS, fontes e imagens durante o primeiro paint, o que
      atrasava justamente o conteúdo que o visitante precisa ver primeiro. */
const Hero = () => {
  const videoRef = useRef(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (document.readyState === "complete") {
      setSrc(video);
      return;
    }
    const aoCarregar = () => setSrc(video);
    window.addEventListener("load", aoCarregar, { once: true });
    return () => window.removeEventListener("load", aoCarregar);
  }, []);

  useEffect(() => {
    if (!src) return;
    /* Autoplay pode ser recusado (economia de bateria, dados reduzidos). Se for,
       o poster continua na tela e nada quebra — por isso o catch vazio. */
    videoRef.current?.play?.().catch(() => {});
  }, [src]);

  return (
    <div className="hero">
      <video
        ref={videoRef}
        src={src ?? undefined}
        poster="/hero-poster.jpg"
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="color-overlay"></div>
      <div className="hero-content">
        <h1>Ajudamos sua Empresa a se tornar mais segura e lucrativa</h1>
        <p>
          Não deixe seu negócio vulnerável a falhas que podem comprometer seu crescimento.
          Planeje hoje para garantir um futuro de prosperidade e sucesso.
        </p>
      </div>
    </div>
  );
};

export default Hero;
