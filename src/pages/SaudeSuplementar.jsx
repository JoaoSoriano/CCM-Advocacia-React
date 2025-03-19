import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import plano from '../img/plano.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const SaudeSuplementar = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Saúde Suplementar</h1>
            <div className="imagem-container">
                <img src={plano} alt="Plano de Saúde" />
            </div>
            <p className="info-text">Nosso escritório se distingue por sua atuação especializada e estratégica na complexa seara do Direito à Saúde, abrangendo tanto a saúde suplementar quanto o Sistema Único de Saúde (SUS). Apresentamos uma estrutura altamente qualificada e intrinsecamente dedicada à proteção intransigente dos direitos. 
            Nossa expertise se manifesta em um leque abrangente de demandas cruciais, desde negativas de procedimentos essenciais até a garantia de acesso a medicamentos de alto custo, frequentemente vitais para a sobrevida e a qualidade de vida. Compreendemos a urgência e a sensibilidade inerentes aos casos de recusa de cobertura, atuando com agilidade e precisão para assegurar a saúde e o bem-estar dos pacientes, tanto no âmbito dos planos de saúde quanto no SUS. 
            </p>
            <p className="info-text">O profundo conhecimento das normas e regulamentações do setor nos permite construir argumentações robustas e buscar soluções eficazes, seja por meio de negociações extrajudiciais estratégicas ou através de ações judiciais assertivas.
            No que tange ao fornecimento de medicamentos de alto custo, nossa equipe reconhece a imperatividade de garantir que os pacientes recebam os tratamentos prescritos por seus médicos, seja através dos planos de saúde ou do SUS. Nossa atuação envolve a análise minuciosa de cada caso, a coleta de evidências científicas e a apresentação de argumentos jurídicos consistentes, visando assegurar o cumprimento das obrigações das operadoras de planos de saúde e do SUS.
            </p>
            <p className='info-text'>Adicionalmente, nosso escritório se dedica a salvaguardar os beneficiários contra práticas abusivas, como reajustes exorbitantes de mensalidades e cancelamentos indevidos. Examinamos meticulosamente os contratos e as justificativas apresentadas pelas operadoras, bem como as normas e regulamentações aplicáveis, buscando identificar irregularidades e assegurar que os pacientes sejam tratados com equidade e transparência.
            A expertise do nosso escritório se estende também à obtenção de reembolsos para beneficiários que arcaram com despesas médicas cobertas por seus planos de saúde, garantindo a restituição de valores devidos.
            Nosso compromisso inabalável é assegurar que todos os pacientes tenham pleno acesso aos seus direitos fundamentais à saúde, utilizando de nossa expertise para transformar desafios em soluções concretas e eficazes.</p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default SaudeSuplementar;
