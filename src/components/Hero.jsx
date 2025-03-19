import React from "react";
import "../styles/hero.css";
import video from "../img/DroneVideo .mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a Imagem.
      </video>
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
