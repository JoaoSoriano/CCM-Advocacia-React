import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/diferenciais.css";
import medico from "../img/medico.jpg";
import escritorio from "../img/ASSE_NOVO.jpeg";
import privacidade from "../img/dados.jpg";
import tecnologia from "../img/tec.jpg";
import shakehand from "../img/shakehand.jpg";
import plano from "../img/plano.jpg";

const diferenciais = [
  { link: "/areaSaude", img: medico, alt: "Imagem Médico", title: "Direito para Profissionais da Saúde." },
  { link: "/assessoriaJuridica", img: escritorio, alt: "Imagem Escritório", title: "Assessoria Jurídica Preventiva." },
  { link: "/privacidadeDeDados", img: privacidade, alt: "Imagem Privacidade de Dados", title: "Privacidade e Proteção de Dados (LGPD)." },
  { link: "/areaTecnologiaControle", img: tecnologia, alt: "Imagem Tecnologia e Controle", title: "Tecnologia nos Processos de Controle." },
  { link: "/areaMediacao", img: shakehand, alt: "Imagem de Acordo", title: "Mediação Extrajudicial." },
  { link: "/saudeSuplementar", img: plano, alt: "Imagem de Acordo", title: "Saúde Suplementar." }
];

const AUTOPLAY_MS = 3000;

/* Seta em SVG: ícone desenhado com glifo de fonte vira quadrado sempre que a
   fonte carregada não traz aquele caractere. */
const Arrow = () => (
  <svg className="dif-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M4.5 12h14m-5.75-6.25L19 12l-6.25 6.25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Diferenciais = () => {
  const trackRef = useRef(null);
  const pageRef = useRef(0);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Toda a paginação é derivada da geometria real do track, então os
     breakpoints vivem só no CSS e o JS não precisa saber quantos cards
     cabem por tela. */
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;

    const slides = Array.from(track.children);
    if (!slides.length) return null;

    const pitch =
      slides.length > 1
        ? slides[1].offsetLeft - slides[0].offsetLeft
        : slides[0].offsetWidth;
    if (pitch <= 0) return null;

    const perView = Math.max(1, Math.round(track.clientWidth / pitch));

    return {
      slides,
      pitch,
      perView,
      origin: slides[0].offsetLeft,
      total: Math.max(1, Math.ceil(slides.length / perView))
    };
  }, []);

  const goTo = useCallback(
    (next, smooth = true) => {
      const track = trackRef.current;
      const metrics = measure();
      if (!track || !metrics) return;

      const index = Math.min(next * metrics.perView, metrics.slides.length - 1);
      track.scrollTo({
        left: metrics.slides[index].offsetLeft - metrics.origin,
        behavior: smooth ? "smooth" : "auto"
      });
    },
    [measure]
  );

  const step = useCallback(
    (delta) => goTo((pageRef.current + delta + pageCount) % pageCount),
    [goTo, pageCount]
  );

  /* Sincroniza o indicador com a rolagem — inclusive o swipe manual. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const sync = () => {
      frame = 0;
      const metrics = measure();
      if (!metrics) return;

      setPageCount(metrics.total);

      const span = metrics.perView * metrics.pitch;
      const remaining =
        track.scrollWidth - track.clientWidth - track.scrollLeft;

      /* A última página encosta no fim da rolagem e quase nunca é um
         múltiplo exato de `span`, por isso o caso é tratado à parte. */
      const current =
        remaining < 2
          ? metrics.total - 1
          : Math.min(
              metrics.total - 1,
              Math.max(0, Math.round(track.scrollLeft / span))
            );

      pageRef.current = current;
      setPage(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };

    sync();
    track.addEventListener("scroll", schedule, { passive: true });

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(track);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      track.removeEventListener("scroll", schedule);
      resizeObserver.disconnect();
    };
  }, [measure]);

  /* Fora da viewport o carrossel não gasta ciclo nenhum. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || pageCount <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      if (document.hidden) return;
      goTo((pageRef.current + 1) % pageCount);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [paused, visible, pageCount, goTo]);

  const hasControls = pageCount > 1;

  return (
    <section className="diferenciais" id="diferenciais">
      <div className="titulo-diferenciais">
        <h2 className="h2site">Diferenciais</h2>
        <p className="diferenciais-p">
          Compromisso e excelência nas especialidades que nos destacam
        </p>
      </div>

      <div
        className="dif-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="dif-viewport">
          <ul className="dif-track" ref={trackRef} role="list">
            {diferenciais.map((item) => (
              <li className="dif-slide" key={item.link}>
                <Link to={item.link} className="dif-card">
                  <div className="dif-card__media">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="dif-card__img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="dif-card__body">
                    <h3 className="dif-card__title">{item.title}</h3>
                    <span className="dif-card__cta">
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {hasControls && (
            <>
              <button
                type="button"
                className="dif-nav dif-nav--prev"
                onClick={() => step(-1)}
                aria-label="Ver diferenciais anteriores"
              >
                <Arrow />
              </button>
              <button
                type="button"
                className="dif-nav dif-nav--next"
                onClick={() => step(1)}
                aria-label="Ver próximos diferenciais"
              >
                <Arrow />
              </button>
            </>
          )}
        </div>

        {hasControls && (
          <div className="dif-dots">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`dif-dot${index === page ? " is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Ir para o grupo ${index + 1} de ${pageCount}`}
                aria-current={index === page ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Diferenciais;
