import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import trabalho from '../img/trabalho.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const DirTrab = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Direito Trabalhista</h1>
            <div className="imagem-container">
                <img src={trabalho} alt="Direito do Trabalho" />
            </div>
            <p className="info-text">
                No complexo ambiente empresarial, a legislação trabalhista desempenha um papel fundamental, moldando as relações entre empregadores e empregados. Nosso escritório oferece soluções jurídicas especializadas em Direito do Trabalho, voltadas para empresas que buscam a conformidade legal, a gestão eficiente de recursos humanos e a mitigação de riscos.
                Acreditamos que a prevenção é a chave para evitar litígios trabalhistas e garantir um ambiente de trabalho harmonioso. Por isso, oferecemos consultoria jurídica especializada em legislação trabalhista, auxiliando empresas na interpretação e aplicação da Consolidação das Leis do Trabalho (CLT), acordos coletivos e convenções sindicais. 
            </p>
            <p className="info-text">Nossa equipe auxilia empresas na elaboração e análise de contratos de trabalho, políticas internas, regulamentos e outros documentos essenciais para a gestão de recursos humanos. Orientamos sobre questões como jornada de trabalho, férias, benefícios, segurança e saúde no trabalho, e outras demandas que possam gerar conflitos trabalhistas. Atuamos na identificação de potenciais conflitos e na implementação de medidas preventivas adequadas, como treinamentos para gestores e equipes de recursos humanos, auditorias trabalhistas e a revisão de procedimentos internos. Em casos de litígios trabalhistas, representamos as empresas em processos judiciais e administrativos, buscando sempre a melhor solução para cada caso. Nossa equipe possui experiência na defesa dos interesses das empresas em ações trabalhistas, negociando acordos e buscando a redução de riscos financeiros e reputacionais.
            </p>
            <p className="info-text">Nosso compromisso é oferecer um suporte jurídico completo e personalizado, para que as empresas possam se dedicar ao seu core business, enquanto cuidamos da segurança jurídica nas relações de trabalho.</p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default DirTrab;
