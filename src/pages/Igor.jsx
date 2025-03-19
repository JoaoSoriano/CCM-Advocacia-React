import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import igorPhoto from '../img/igor.jpg';
import '../styles/perfil.css';

const Igor = () => {
  return (
    <>
        <HeaderSimples />

        <section className="perfil-page">

            {/* Nome da Advogada */}
            <div className="nome-perfil">
            <div className="sec-title-three">
                <h2>Igor Campêlo</h2>
            </div>
            </div>

            {/* Foto e Currículo */}
            <section className="profile-section">
            <div className="profile-photo">
                <img src={igorPhoto} alt="Igor Campêlo" />
            </div>
            <div className="profile-curriculum">
                <h3>Experiência:</h3>
                <p>
                    Advogado. Bacharel em Direito pela Universidade Católica de Pernambuco.
                    Pós-Graduado em Direito da Saúde pela Verbo Jurídico. Possui experiência
                    em Direito Médico e da Saúde, com vasta atuação em escritórios
                    especializados em Direito Médico e da Saúde. Membro do GT de Saúde
                    Suplementar da Comissão de Direito do Consumidor da OAB-PE e Membro
                    da Comissão de Direito Médico e da Saúde da OAB -JABOATÃO. Professor e
                    Palestrante em cursos de Prática Jurídica em Saúde.
                </p>
            </div>
            </section>
        </section>

        <Footer />
    </>

  );
};

export default Igor;
