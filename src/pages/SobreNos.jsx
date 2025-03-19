import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import sociedade from '../img/sociedade.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const SobreNos = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Sobre Nós</h1>
            <div className="imagem-container">
                <img src={sociedade} alt="Sociedade" />
            </div>
            <p className="info-text">
            O escritório nasceu a partir da união de especialidades e propósitos em comum que objetivam auxiliar Pessoas Jurídicas e Físicas na solução dos conflitos de forma simples e célere, promovendo maior satisfação para as partes envolvidas. A nossa equipe adquiriu vida própria, com suas características advindas do que acreditamos, tornando-se uma marca moderna, acessível, criativa, profissional, digital e, principalmente, humana. Prezamos pela excelência, ética e profissionalismo desde a qualidade dos serviços prestados até o atendimento ao cliente. 
            </p>
            <p className="info-text">Os profissionais estão sempre atualizados sobre as últimas mudanças na legislação e na jurisprudência, de modo a oferecer a melhor orientação possível aos clientes. Além disso, têm conhecimento aprofundado das leis e regulamentações específicas, fornecendo uma orientação adequada aos clientes.
            </p>
            <p className="info-text">Quando estamos em sintonia com as partes, podemos melhor conduzi-las à construção de um diálogo colaborativo e efetivo na circunstância de igualdade de frequências, tanto no âmbito emocional quanto no prático. O litígio não é a única maneira de solucionar uma determinada questão.</p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default SobreNos;
