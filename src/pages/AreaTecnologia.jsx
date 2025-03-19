import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import tec from '../img/tec.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const AreaTecnologia = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Tecnologia nos Processos de Controle</h1>
            <div className="imagem-container">
                <img src={tec} alt="Tecnologia" />
            </div>
            <p className="info-text">Nossa área de tecnologia é dedicada a proporcionar soluções inovadoras para o
            gerenciamento de processos judiciais, utilizando sistemas de gestão e workflows avançados. 
            </p>
            <p className="info-text">Implementamos um sistema de gestão que integra todas as etapas do processo judicial,
                oferecendo uma visão clara e organizada de cada caso. Este sistema facilita a alocação de
                tarefas, monitoramento de prazos e acompanhamento de atividades, garantindo maior
                eficiência e precisão na execução das tarefas.
            </p>
            <p className="info-text">
                Os workflows automatizados são projetados para otimizar cada fase do processo, desde a
                triagem inicial até a resolução final. Essas automações reduzem a possibilidade de erros humanos, aumentam a produtividade e
                asseguram que cada etapa seja concluída de acordo com os padrões estabelecidos.
            </p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default AreaTecnologia;
