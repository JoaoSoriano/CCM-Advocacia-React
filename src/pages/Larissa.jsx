import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import larissaPhoto from '../img/FotoLarissa .jpg';
import '../styles/perfil.css';

const Larissa = () => {
  return (
    <>
        <HeaderSimples />

        <section className="perfil-page">

            {/* Nome da Advogada */}
            <div className="nome-perfil">
            <div className="sec-title-three">
                <h2>Larissa Carrazzoni</h2>
            </div>
            </div>

            {/* Foto e Currículo */}
            <section className="profile-section">
            <div className="profile-photo">
                <img src={larissaPhoto} alt="Larissa Carrazzoni" />
            </div>
            <div className="profile-curriculum">
                <h3>Experiência:</h3>
                <p>
                Advogada, atua com assessoria preventiva e defesa estratégica para profissionais e empresas de saúde e na saúde suplementar; expertise e atuação em Integridade e LGPD, com auxílio a pessoas físicas, jurídicas públicas e privadas na adequação às normativas que regem a coleta, uso e proteção de dados; Mediadora Extrajudicial; Bacharela em Direito pela Universidade Católica de Pernambuco - UNICAP; Pós-graduada em Direito Médico e da Saúde – LLM - Católica Business School - UNICAP; Especialista em Direito Médico e da Saúde pelo Instituto Paulista de Direito Médico e da Saúde - IPDMS; Mestranda em Direito Médico-Odontológico pela São Leopoldo Mandic - SP; Presidente da Comissão de Direito Médico e da Saúde da OAB JAB; Vice-Presidente e representante de PE da Comissão Nacional de Direito Odontológico da ABA; membro da Sociedade Brasileira de Bioética/PE; membro da Unidade de Bioética do Real Hospital Português que faz parte da International Chair in Bioethics – World Medical Association Cooperating Centre; ex-membro da Comissão de Perícias Forenses da OAB/PE; ex-membro representante de PE da Comissão Nacional de Bioética da ABA; ex-membro consultor na Comissão Especial de Bioética e Biodireito da OAB do ES; professora e palestrante em cursos para profissionais da área de saúde; autora de obras jurídicas.
                </p>
            </div>
            </section>
        </section>

        <Footer />
    </>

  );
};

export default Larissa;
