import React from 'react';
import HeaderSimples from '../components/HeaderSimples';
import Footer from '../components/Footer';
import doctor from '../img/doctor.jpg';
import '../styles/info.css';
import '../styles/perfil.css';

const DirMed = () => {
  return (
    <>
        <HeaderSimples />

        <section className="box-info">
        <div className="box-info-container">
            <h1>Direito Médico</h1>
            <div className="imagem-container">
                <img src={doctor} alt="Direito Médico" />
            </div>
            <p className="info-text">
                Nosso escritório se destaca pela atuação abrangente e especializada no Direito Médico, oferecendo suporte jurídico completo para esses profissionais da saúde em todas as esferas. 
                Compreendemos os desafios enfrentados por médicos, residentes e demais profissionais, e por isso, oferecemos um leque de serviços que visam proteger seus direitos e interesses.
                Para os residentes, auxiliamos na conquista do auxílio moradia, um direito fundamental para quem se dedica à formação médica. Além disso, buscamos garantir a concessão do adicional de 10% na residência para aqueles que atuaram no programa Mais Médicos, reconhecendo o valor do trabalho prestado à saúde pública. 
            </p>
            <p className="info-text">No âmbito financeiro, oferecemos suporte para o abatimento do FIES, aliviando o peso das dívidas educacionais.
                Acreditamos que a prevenção é a melhor forma de mitigar problemas futuros. Por isso, oferecemos assessoria jurídica preventiva para clínicas, hospitais, laboratórios, empresas de saúde, orientando os profissionais sobre as melhores práticas e condutas para mitigar riscos. Em casos de processos ético-profissionais nos Conselhos de Classe, atuamos com expertise na defesa dos médicos, garantindo o respeito aos seus direitos. Na esfera judicial, representamos os profissionais em ações de danos na prestação de serviços em saúde e outras demandas, buscando sempre a melhor solução para cada caso.
                Na esfera administrativa, defendemos os interesses dos médicos em processos junto a órgãos públicos e privados, como hospitais, planos de saúde e secretarias de saúde.
            </p>
            <p className="info-text">Nosso compromisso é oferecer um suporte jurídico completo e personalizado, para que esses profissionais possam se dedicar ao que fazem de melhor: cuidar da saúde de seus pacientes.</p>
        </div>
        </section>

        <Footer />
    </>

  );
};

export default DirMed;
