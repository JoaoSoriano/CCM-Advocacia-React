import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import time from '../img/AssJur.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const AssPrev = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Assessoria Jurídica Preventiva</h1>
            <div className="imagem-container">
                <img src={time} alt="Time de Advogados" />
            </div>
            <p className="info-text">Diante da realidade cotidiana, é perceptível a alta demanda judicial no ramo empresarial. Por trás da maioria dos CPFs, sempre há um CNPJ e, inevitavelmente, um e o outro repercutem entre si. A assessoria jurídica preventiva é fundamental, pois pode ajudar a proteger a empresa de ações judiciais e administrativas. Com a contratação de uma assessoria jurídica especializada, o profissional de saúde tem mais tempo para dedicar a seus pacientes, contando com a proteção, segurança jurídica e a tranquilidade que necessita. Além disso, há a proteção da reputação da empresa, om nossa vasta experiência, identificamos e mitigamos riscos éticos e legais. 
            </p>
            <p className="info-text">Entre os benefícios estão a contratação jurídica de profissionais; documentação; melhores relações com clientes e órgãos públicos; controle e redução de custos; prevenção de problemas éticos e legais; economia de recursos ao evitar custos com litígios; melhor organização e gestão empresarial; menor desgaste emocional e a garantia de que todas as operações estejam dentro da Lei. E ainda, oferecemos suporte jurídico estratégico para decisões informadas.
            </p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default AssPrev;
