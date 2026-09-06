import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import doctor from "../img/doctor.jpg";

/* Assinatura da página: hero dividido, esferas em bento e um bloco próprio
   para a residência médica, que é o cluster mais específico deste texto. */

const esferas = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Assessoria preventiva",
    text: "Assessoria jurídica preventiva para clínicas, hospitais, laboratórios e empresas de saúde, orientando os profissionais sobre as melhores práticas e condutas para mitigar riscos."
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Processos ético-profissionais",
    text: "Defesa dos médicos em processos ético-profissionais nos Conselhos de Classe, atuando com expertise para garantir o respeito aos seus direitos."
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Esfera judicial",
    text: "Representação dos profissionais em ações de danos na prestação de serviços em saúde e outras demandas, buscando sempre a melhor solução para cada caso."
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Esfera administrativa",
    text: "Defesa dos interesses dos médicos em processos junto a órgãos públicos e privados, como hospitais, planos de saúde e secretarias de saúde."
  }
];

const residencia = [
  {
    icon: "fa-solid fa-house-chimney",
    title: "Auxílio moradia",
    text: "Auxílio na conquista do auxílio moradia, um direito fundamental para quem se dedica à formação médica."
  },
  {
    icon: "fa-solid fa-percent",
    title: "Adicional de 10%",
    text: "Busca pela concessão do adicional de 10% na residência para quem atuou no programa Mais Médicos, reconhecendo o valor do trabalho prestado à saúde pública."
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Abatimento do FIES",
    text: "No âmbito financeiro, suporte para o abatimento do FIES, aliviando o peso das dívidas educacionais."
  }
];

const faq = [
  {
    q: "O escritório atende médicos residentes?",
    a: "Sim. Auxiliamos na conquista do auxílio moradia, um direito fundamental para quem se dedica à formação médica, e buscamos a concessão do adicional de 10% na residência para aqueles que atuaram no programa Mais Médicos."
  },
  {
    q: "A atuação inclui defesa em Conselhos de Classe?",
    a: "Sim. Em casos de processos ético-profissionais nos Conselhos de Classe, atuamos com expertise na defesa dos médicos, garantindo o respeito aos seus direitos."
  },
  {
    q: "O suporte alcança clínicas e hospitais, além dos profissionais?",
    a: "Sim. Oferecemos assessoria jurídica preventiva para clínicas, hospitais, laboratórios e empresas de saúde, orientando os profissionais sobre as melhores práticas e condutas para mitigar riscos."
  },
  {
    q: "Como funciona a atuação na esfera administrativa?",
    a: "Defendemos os interesses dos médicos em processos junto a órgãos públicos e privados, como hospitais, planos de saúde e secretarias de saúde."
  }
];

const DirMed = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="split"
      badge="Áreas de Atuação"
      title="Direito Médico"
      lede="Atuação abrangente e especializada no Direito Médico, com suporte jurídico completo para profissionais da saúde em todas as esferas."
      image={doctor}
      imageAlt="Profissional de medicina em ambiente hospitalar"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Esferas de atuação"
      intro="Compreendemos os desafios enfrentados por médicos, residentes e demais profissionais, e por isso oferecemos um leque de serviços que visam proteger seus direitos e interesses."
      tone="plain"
    >
      <AreaGrid items={esferas} variant="bento" />
    </AreaSection>

    <AreaSection
      eyebrow="Residência médica"
      title="Direitos de quem está em formação"
      intro="Demandas específicas de quem se dedica à residência, do auxílio moradia ao alívio das dívidas educacionais."
      tone="sand"
    >
      <AreaGrid items={residencia} variant="compact" />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Nosso compromisso é oferecer um suporte jurídico completo e
        personalizado, para que esses profissionais possam se dedicar ao que
        fazem de melhor: cuidar da saúde de seus pacientes.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-medico" />
    </AreaSection>

    <AreaCTA
      title="Precisa de suporte jurídico especializado?"
      text="Acreditamos que a prevenção é a melhor forma de mitigar problemas futuros. Fale com o escritório para entender como podemos apoiar sua atuação."
    />
  </AreaLayout>
);

export default DirMed;
