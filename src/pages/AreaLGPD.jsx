import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import dados from '../img/dados.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const AreaLgpd = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Privacidade e Proteção de Dados</h1>
            <div className="imagem-container">
                <img src={dados} alt="Imagem - Dados Pessoais" />
            </div>
            <p className="info-text">A CCM Advocacia é referência em assessoria jurídica
                preventiva para empresas de saúde na adequação e implementação da LGPD.
                Nossa equipe especializada oferece consultoria e
                adequação, realizando avaliações de conformidade e
                criação de políticas internas. Também proporcionamos
                treinamento para capacitação de colaboradores na correta
                aplicação da LGPD, além de análise de riscos para
                identificar e mitigar riscos no tratamento de dados
                pessoais. Nossa expertise inclui a criação e revisão de
                contratos e políticas de privacidade, bem como
                atendimento a incidentes com respostas rápidas e eficazes. 
            </p>
            <p className="info-text">Oferecemos ainda assessoria contínua, monitorando e
                atualizando as práticas de proteção de dados. Garanta a
                conformidade da sua clínica com a LGPD e proteja os
                dados dos seus pacientes.
            </p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default AreaLgpd;
