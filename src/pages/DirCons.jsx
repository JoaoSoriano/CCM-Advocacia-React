import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import consumidor from '../img/consumidor.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const DirCons = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Direito do Consumidor</h1>
            <div className="imagem-container">
                <img src={consumidor} alt="Direito do Consumidor" />
            </div>
            <p className="info-text">No dinâmico ambiente de negócios atual, a legislação consumerista exerce um papel crucial na proteção dos direitos dos consumidores, impactando diretamente a atuação das empresas. Nosso escritório oferece soluções jurídicas especializadas em Direito do Consumidor, voltadas para empresas que buscam a conformidade legal, a mitigação de riscos e a otimização de suas relações comerciais. Compreendemos que a complexidade do Código de Defesa do Consumidor (CDC) exige uma abordagem preventiva e estratégica. Por isso, oferecemos assessoria jurídica completa, auxiliando empresas na elaboração e revisão de contratos, políticas de troca e devolução, termos de uso e outras documentações essenciais para garantir a transparência e a segurança nas relações de consumo. Nossa equipe orienta as empresas em questões como publicidade enganosa, práticas abusivas, responsabilidade por produtos e serviços, e outras demandas que possam gerar litígios com consumidores. Atuamos na defesa dos interesses das empresas em processos administrativos e judiciais, buscando sempre a melhor solução para cada caso. Acreditamos que a prevenção é a chave para evitar problemas futuros, e por isso, incentivamos a adoção de boas práticas e a busca constante pela excelência no atendimento ao consumidor. 
            </p>
            <p className="info-text">No âmbito contratual, reconhecemos a importância de relações comerciais sólidas e seguras com distribuidores, fornecedores e parceiros. Auxiliamos na elaboração e revisão de contratos comerciais, garantindo a proteção dos interesses da empresa em todas as etapas da cadeia de suprimentos e parcerias estratégicas. Para garantir a proteção de informações sensíveis e estratégicas, auxiliamos na elaboração de acordos de confidencialidade (NDAs), assegurando a segurança e o sigilo de dados compartilhados com parceiros, fornecedores e outros stakeholders. Nosso compromisso é oferecer um suporte jurídico completo e personalizado, para que as empresas possam se dedicar ao seu core business, enquanto nós cuidamos da segurança jurídica nas relações de consumo e comerciais, abrangendo desde a análise de riscos até a defesa em litígios complexos.
            </p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default DirCons;
