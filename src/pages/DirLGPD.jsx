import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaTimeline from "../components/area/AreaTimeline";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import dados from "../img/dados2.jpg";

/* Assinatura da página: o texto descreve um ciclo de adequação com fases
   encadeadas, então a linha do tempo é o centro visual e ganha fundo escuro. */

const jornada = [
  {
    title: "Avaliação de conformidade",
    text: "Consultoria inicial com avaliações de conformidade para diagnosticar a situação atual do tratamento de dados na empresa."
  },
  {
    title: "Políticas internas",
    text: "Criação de políticas internas robustas, que traduzem as exigências da LGPD em regras aplicáveis ao dia a dia da operação."
  },
  {
    title: "Treinamento de colaboradores",
    text: "Capacitação das equipes na correta aplicação da LGPD, disseminando os valores e as práticas de conformidade em todos os níveis da empresa."
  },
  {
    title: "Análise de riscos",
    text: "Identificação e mitigação de vulnerabilidades no tratamento de dados pessoais, etapa essencial para garantir a segurança das informações."
  },
  {
    title: "Contratos e políticas de privacidade",
    text: "Criação e revisão de contratos e políticas de privacidade, alinhando os documentos da empresa ao que a lei exige."
  },
  {
    title: "Monitoramento contínuo",
    text: "Assessoria contínua, monitorando e atualizando as práticas de proteção de dados para que a empresa permaneça em conformidade."
  }
];

const pilares = [
  {
    icon: "fa-solid fa-eye",
    title: "Transparência nas decisões",
    text: "A atuação é pautada pela transparência, assegurando o respeito aos pacientes e demais envolvidos."
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Cumprimento de normas",
    text: "Observância da LGPD, das normas da ANVISA e dos Códigos de Ética profissional, que fortalecem a confiança e a credibilidade das empresas de saúde."
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Gestão de riscos",
    text: "Identificação, avaliação e mitigação de potenciais ameaças por meio da implementação de controles internos eficazes."
  },
  {
    icon: "fa-solid fa-users",
    title: "Cultura de conformidade",
    text: "Treinamento e capacitação dos colaboradores para disseminar as práticas de compliance em todos os níveis da empresa."
  },
  {
    icon: "fa-solid fa-magnifying-glass",
    title: "Auditorias e monitoramento",
    text: "Auditorias internas e externas com monitoramento contínuo das atividades, garantindo a detecção e correção de eventuais desvios."
  },
  {
    icon: "fa-solid fa-bell",
    title: "Atendimento a incidentes",
    text: "Respostas rápidas e eficazes diante de incidentes, assegurando a continuidade das operações."
  }
];

const faq = [
  {
    q: "A adequação à LGPD inclui treinamento da equipe?",
    a: "Sim. Proporcionamos treinamento para capacitar colaboradores na correta aplicação da LGPD, disseminando os valores e as práticas de conformidade em todos os níveis da empresa."
  },
  {
    q: "O que acontece em caso de incidente de segurança?",
    a: "O atendimento a incidentes é parte da nossa expertise, com respostas rápidas e eficazes que asseguram a continuidade das operações."
  },
  {
    q: "A conformidade se limita à LGPD?",
    a: "Não. A confiança e a credibilidade das empresas de saúde são fortalecidas pelo cumprimento das leis, normas e regulamentações do setor, incluindo a observância da LGPD, das normas da ANVISA e dos Códigos de Ética profissional."
  },
  {
    q: "O acompanhamento termina após a implementação?",
    a: "Não. Oferecemos assessoria contínua, monitorando e atualizando as práticas de proteção de dados para garantir que os clientes estejam sempre em conformidade com as normas e regulamentações do setor."
  }
];

const DirLGPD = () => (
  <AreaLayout tone="warm">
    <AreaHero
      variant="split"
      badge="Áreas de Atuação"
      title="Integridade, Compliance e Adequação à LGPD"
      lede="Assessoria jurídica preventiva para empresas de saúde, unindo a expertise em adequação à LGPD a um compromisso com a integridade e o compliance."
      image={dados}
      imageAlt="Proteção de dados pessoais"
    />

    <AreaSection
      eyebrow="Como conduzimos"
      title="O ciclo de adequação"
      intro="Da avaliação inicial ao monitoramento permanente, cada fase prepara a seguinte e mantém a empresa em conformidade ao longo do tempo."
      tone="dark"
    >
      <AreaTimeline steps={jornada} />
    </AreaSection>

    <AreaSection
      eyebrow="Fundamentos"
      title="Pilares da integridade e do compliance"
      intro="Entendemos que a integridade e o compliance na área da saúde são pilares fundamentais, e a atuação se organiza em torno deles."
      tone="plain"
    >
      <AreaGrid items={pilares} variant="feature-pair" />
    </AreaSection>

    <AreaSection tone="warm" width="narrow">
      <AreaQuote tone="rule">
        Ao fortalecer esses pilares, o escritório auxilia as empresas de saúde a
        construir um ambiente de confiança, segurança e excelência, protegendo a
        saúde e o bem-estar dos pacientes.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a adequação"
      tone="plain"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-compliance-lgpd" />
    </AreaSection>

    <AreaCTA
      title="Garanta a conformidade da sua empresa de saúde"
      text="Proteja os dados dos seus pacientes e mantenha a operação alinhada às normas do setor."
    />
  </AreaLayout>
);

export default DirLGPD;
