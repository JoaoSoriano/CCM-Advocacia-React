import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import dados from '../img/dados2.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const DirLGPD = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Integridade, Compliance e adequação à Lei Geral de Proteção de Dados Pessoais</h1>
            <div className="imagem-container">
                <img src={dados} alt="LGPD" />
            </div>
            <p className="info-text">O escritório especializado em assessoria jurídica preventiva para empresas de saúde, uni a expertise em adequação à LGPD com um compromisso com a integridade e o compliance. Nossa equipe oferece consultoria, adequação e implementação, realizando avaliações de conformidade e criando políticas internas robustas, além de proporcionar treinamento para capacitar colaboradores na correta aplicação da LGPD. A análise de riscos, essencial para identificar e mitigar vulnerabilidades no tratamento de dados pessoais, é realizada, garantindo a segurança das informações. Nossa expertise abrange a criação e revisão de contratos e políticas de privacidade, bem como o atendimento a incidentes com respostas rápidas e eficazes, assegurando a continuidade das operações. 
            </p>
            <p className="info-text">Entendemos que a integridade e o compliance na área da saúde são pilares fundamentais, por isso, nossa atuação é pautada pela transparência nas decisões, assegurando o respeito aos pacientes e demais envolvidos. Acreditamos que a confiança e a credibilidade das empresas de saúde são fortalecidas pelo cumprimento das leis, normas e regulamentações do setor, incluindo a observância da LGPD, normas da ANVISA e Códigos de Ética profissional.
            </p>
            <p className='info-text'>A gestão de riscos é uma prioridade, com a identificação, avaliação e mitigação de potenciais ameaças, por meio da implementação de controles internos eficazes. Promovemos uma cultura, com treinamento e capacitação dos colaboradores, disseminando os valores e as práticas de conformidade em todos os níveis da empresa. A realização de auditorias internas e externas, juntamente com o monitoramento contínuo das atividades, garante a detecção e correção de eventuais desvios, assegurando a eficácia dos programas de compliance.</p>
            <p className='info-text'>Oferecemos assessoria contínua, monitorando e atualizando as práticas de proteção de dados, garantindo que nossos clientes estejam sempre em conformidade com as normas e regulamentações do setor. Ao fortalecer esses pilares, o escritório auxilia as empresas de saúde a construir um ambiente de confiança, segurança e excelência, protegendo a saúde e o bem-estar dos pacientes e garantindo a sustentabilidade do setor. Garanta a conformidade da sua empresa de saúde e proteja os dados dos seus pacientes.</p>

        </div>
        </section>

        <Footer />
    </>

  );
};

export default DirLGPD;
