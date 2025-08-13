import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
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

const Diferenciais = () => {
  return (
    <>
      <div className='diferenciais' id='diferenciais'>
        <div className="titulo-diferenciais">
          <h2 className="h2site">Diferenciais</h2>
          <p className="diferenciais-p">
            Compromisso e excelência nas especialidades que nos destacam
          </p>
        </div>
        <div className="container">
          <div className='card-wrapper'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
              pagination={{ el:'.swiper-pagination', clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Adiciona autoplay
              className='card-list'
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {diferenciais.map((item, index) => (
                <SwiperSlide key={index} className='card-item'>
                  <Link to={item.link} className="card-link">
                    <img src={item.img} alt={item.alt} className="card-image" />
                    <h2 className="card-title">{item.title}</h2>
                    <button className='card-button'>⮎</button>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diferenciais;
