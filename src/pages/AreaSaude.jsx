import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import medico from '../img/medico.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const AreaSaude = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Direito para Profissionais da Saúde</h1>
            <div className="imagem-container">
                <img src={medico} alt="Médico" />
            </div>
            <p className="info-text">A CCM advocacia é um escritório especializado em direito para profissionais da saúde, com uma
                vasta experiência em demandas dessas classes. Nosso time é composto
                por um departamento técnico altamente qualificado, preparado para oferecer soluções abrangentes
                em questões judiciais, contratuais, administrativas e regulatórias relacionadas a profissionais e empresas de saúde como clínicas, laboratórios e hospitais. 
            </p>
            <p className="info-text">Além disso, atuamos de forma destacada no consultivo e contencioso, incluindo a defesa em processos éticos, esferas administrativas e judiciais. Fornecemos uma atuação abrangente e preventiva para empresas de saúde, abordando aspectos éticos, civis, sanitários, de adequação à Lei geral de proteção de dados pessoais, de publicidade, administrativos, trabalhistas e tributários, garantindo assim a
                conformidade e a segurança jurídica de nossos clientes.
            </p>
            <p className="info-text">
                Oferecemos um suporte jurídico completo e especializado, assegurando a melhor
                defesa e orientação para os Profissionais da Saúde.
            </p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default AreaSaude;
