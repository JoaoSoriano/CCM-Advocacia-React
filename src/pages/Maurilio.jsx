import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import maurilioImg from "../img/MaurilioFoto.jpg";
import '../styles/perfil.css';

const Maurilio = () => {
  return (
    <>
        <HeaderSimples />

        <section className="perfil-page">

            {/* Nome da Advogada */}
            <div className="nome-perfil">
            <div className="sec-title-three">
                <h2>Maurílio Medeiros</h2>
            </div>
            </div>

            {/* Foto e Currículo */}
            <section className="profile-section">
            <div className="profile-photo">
                <img src={maurilioImg} alt="Maurílio Medeiros" />
            </div>
            <div className="profile-curriculum">
                <h3>Experiência:</h3>
                <p>
                Advogado - Graduado em Direito pela faculdade Internacional da Paraíba – Laureate Internacional Universities em (2010); Pós Graduado em Direito Processual Civil e do Trabalho pela escola de Magistratura do Trabalho da 6ª Região – ESMATRA (2017/2018); 
                Pós Graduado em Direito Médico e da Saúde pela faculdade Legale (2020); Pós Graduado em Direito Médico e da Saúde pelo pelo IPDMS – 
                Instituto de Direito Médico e da Saúde(2024); Especialista em Direito Médico pelo IPDMS – Instituto de Direito Médico e da Saúde (2021); Professor Palestrante convidado na Pós- Graduação Lato Sensu em Práticas Jurídicas Aplicadas ao Direito Médico e a Saúde - 
                Professor da Escola de Direito da Saúde - Tutor Acadêmica do Programa de Formação em Direito Médico - Presidente da Comissão Nacional de Direito Odontológico da ABA; ; 
                Vice-presidente da Comissão de Direito Médico e da Saúde OAB-PB; Presidente do Comitê Estadual Interinstitucional de Monitoramento da Política Antimanicomial do Poder Judiciário da Paraíba - CEIMPA- Assessor jurídico parlamentar, Palestrante e Autor e Coordenador de obras jurídicas.
                </p>
            </div>
            </section>
        </section>

        <Footer />
    </>

  );
};

export default Maurilio;
