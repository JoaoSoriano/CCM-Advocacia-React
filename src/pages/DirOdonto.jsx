import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaChips from "../components/area/AreaChips";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import dentista from "../img/dentista.jpg";

/* Assinatura da página: hero com imagem sangrando e as frentes de atuação
   em grade uniforme. Oito itens fecham em 4×2 no desktop, sem vão. */

const esferas = [
  {
    icon: "fa-solid fa-building-columns",
    title: "Esfera administrativa",
    text: "Conformidade da clínica com as exigências de órgãos reguladores, incluindo acompanhamento e obtenção de licenças e alvarás, cumprimento de normas sanitárias e defesa em processos administrativos."
  },
  {
    icon: "fa-solid fa-file-contract",
    title: "Contratos e termos",
    text: "Elaboração e revisão minuciosa de contratos de prestação de serviços, termos de consentimento informado e contratos de parceria, com direitos e deveres claramente definidos."
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "Normas e regulamentações",
    text: "Consultoria detalhada sobre as normas da ANVISA, do Conselho Federal de Odontologia e demais legislações pertinentes, para que a clínica opere em total conformidade."
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Esfera trabalhista",
    text: "Suporte na contratação e gestão de funcionários, com elaboração de contratos de trabalho adequados e implementação de políticas internas que previnam passivos trabalhistas."
  },
  {
    icon: "fa-solid fa-lock",
    title: "Proteção de dados",
    text: "Adequação à Lei Geral de Proteção de Dados no tratamento de dados dos pacientes, garantindo a segurança das informações e a reputação da clínica."
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Esfera contenciosa",
    text: "Representação em processos judiciais, em ações de responsabilidade civil por alegações de danos na prestação de serviço ou negligência e em ações consumeristas."
  },
  {
    icon: "fa-solid fa-money-bill-wave",
    title: "Recuperação de crédito",
    text: "Cobrança de valores devidos por pacientes de forma legal e eficaz, por meio de negociações extrajudiciais ou das ações judiciais cabíveis."
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Processos ético-profissionais",
    text: "Defesa perante os Conselhos Regionais de Odontologia e o Conselho Federal de Odontologia, garantindo um processo justo ao profissional."
  }
];

const orgaos = [
  "ANVISA",
  "PROCON",
  "Conselho Federal de Odontologia",
  "Conselhos Regionais de Odontologia",
  "Órgãos de fiscalização sanitária"
];

const faq = [
  {
    q: "A assessoria cobre licenças e alvarás da clínica?",
    a: "Sim. A atuação administrativa inclui o acompanhamento e a obtenção de licenças e alvarás necessários para o funcionamento da clínica, além do cumprimento de normas sanitárias."
  },
  {
    q: "Quais órgãos reguladores estão envolvidos na conformidade?",
    a: "A consultoria abrange as normas e regulamentações estabelecidas pela ANVISA e pelo Conselho Federal de Odontologia, além da defesa em processos instaurados por órgãos como o PROCON e outros órgãos de fiscalização."
  },
  {
    q: "O escritório atua na recuperação de crédito da clínica?",
    a: "Sim. A recuperação de crédito é uma área vital para a saúde financeira da clínica, e o suporte busca a cobrança de valores devidos por pacientes de forma legal e eficaz, seja por negociação extrajudicial, seja por ação judicial."
  },
  {
    q: "É possível resolver conflitos sem processo judicial?",
    a: "Sim. A busca por soluções amigáveis através da mediação e negociação faz parte da atuação, resolvendo conflitos de forma mais rápida e eficiente e preservando o relacionamento entre o cirurgião-dentista e o paciente."
  },
  {
    q: "A proteção de dados dos pacientes está incluída?",
    a: "Sim. Em um mundo cada vez mais digital, a proteção de dados dos pacientes em conformidade com a LGPD é área na qual a assessoria especializada se mostra indispensável, garantindo a segurança das informações e a reputação da clínica."
  }
];

const DirOdonto = () => (
  <AreaLayout tone="sand">
    <AreaHero
      variant="overlay"
      badge="Áreas de Atuação"
      title="Direito Odontológico"
      lede="O ramo dedicado a navegar pelas complexidades jurídicas inerentes à prática odontológica, essencial para a sustentabilidade e o sucesso de clínicas e consultórios."
      image={dentista}
      imageAlt="Consultório odontológico"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Frentes de atuação"
      intro="A assessoria jurídica especializada se torna não apenas recomendável, mas essencial. A atuação cobre da prevenção de riscos éticos e legais até a defesa em conflitos já instaurados."
      tone="plain"
    >
      <AreaGrid items={esferas} variant="even" />
    </AreaSection>

    <AreaSection
      eyebrow="Conformidade"
      title="Órgãos e normas envolvidos"
      intro="A orientação é fundamental para garantir que a clínica opere em total conformidade com os padrões de segurança e qualidade exigidos, evitando sanções e garantindo a confiança dos pacientes."
      tone="sand"
      width="narrow"
    >
      <AreaChips items={orgaos} />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Investir em assessoria jurídica especializada em direito odontológico
        representa um passo estratégico para qualquer profissional ou clínica
        que busca não apenas o sucesso, mas também a segurança e a
        tranquilidade no exercício da profissão.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-odontologico" />
    </AreaSection>

    <AreaCTA
      title="Segurança para a sua prática odontológica"
      text="Um investimento que se traduz em segurança, tranquilidade e, em última análise, no sucesso sustentável da prática odontológica."
    />
  </AreaLayout>
);

export default DirOdonto;
