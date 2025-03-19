import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import doctor from '../img/saude.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const DirSaude = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Direito à Saúde</h1>
            <div className="imagem-container">
                <img src={doctor} alt="Direito à Saúde" />
            </div>
            <p className="info-text">
            O escritório atua de forma especializada na seara do direito à saúde, abraçando tanto a esfera da saúde suplementar quanto o Sistema Único de Saúde (SUS), e disponibilizando um escritório altamente qualificado e dedicado à salvaguarda desses direitos. A atuação se desdobra em um espectro abrangente de demandas, desde negativas de procedimentos cruciais, até acesso a medicamentos de alto custo, frequentemente determinantes para a sobrevida e a qualidade de vida dos pacientes. 
            </p>
            <p className="info-text">Nosso escritório internaliza a premente urgência e a delicadeza dos casos de negativa de procedimentos, agindo com presteza e assertividade para assegurar a saúde e o bem-estar dos pacientes, seja no contexto dos planos de saúde ou do SUS. O conhecimento aprofundado das normas e regulamentações do setor permite a construção de argumentações robustas e a busca por soluções eficazes, seja por meio de negociações extrajudiciais ou ações judiciais.
            No que concerne ao fornecimento de medicamentos de alto custo, a equipe reconhece a imperatividade de assegurar que os pacientes recebam os tratamentos prescritos por seus médicos, seja por intermédio dos planos de saúde ou do SUS. A atuação envolve a análise meticulosa dos casos, a coleta de evidências científicas e a apresentação de argumentos jurídicos consistentes, visando garantir o cumprimento das obrigações das operadoras de planos de saúde e do SUS.
            </p>
            <p className="info-text">Ademais, o escritório se dedica a proteger os pacientes contra práticas abusivas, como reajustes exorbitantes de mensalidades por planos de saúde e cancelamentos indevidos. Examinamos minuciosamente os contratos e as justificativas apresentadas pelas operadoras, bem como as normas e regulamentações, buscando identificar irregularidades e assegurar que os pacientes sejam tratados com equidade e transparência.
A expertise do escritório se estende também à obtenção de reembolsos para os beneficiários que arcaram com despesas médicas cobertas por seus planos de saúde.
Nosso compromisso é garantir que todos os pacientes tenham pleno acesso aos seus direitos fundamentais à saúde.</p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default DirSaude;
