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
                Advogado. Bacharel em Direito pela Universidade Católica de Pernambuco. Vice-Presidente da Comissão de Direito Médico e da Saúde da OAB/Jaboatão (2025 - atualmente). Secretário-Geral da Comissão de Direito Médico e da Saúde da OAB/Jaboatão (2024). Pós-graduado em Direito da Saúde pela Verbo Jurídico. Possui experiência em Direito Médico e da Saúde, com ampla atuação em escritórios especializados na área. Membro do GT de Saúde Suplementar da Comissão de Direito do Consumidor da OAB-PE (2022), da Comissão de Direito de Família da OAB-PE (2022) e da Comissão de Direito Médico e da Saúde da OAB/Jaboatão. Assessor jurídico parlamentar em Direito Público (2024). Tutor em Direito Tributário para preparatórios do exame da Ordem (2022 - atualmente). Professor, Autor de obras jurídicas e palestrante em cursos de prática jurídica em saúde.
                </p>
            </div>
            </section>
        </section>

        <Footer />
    </>

  );
};

export default Igor;
