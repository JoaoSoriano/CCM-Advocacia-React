import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaTimeline from "../components/area/AreaTimeline";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import tec from "../img/tec.jpg";

/* Assinatura da página: é a única cujo texto descreve um fluxo com início e
   fim explícitos ("da triagem inicial até a resolução final"), então a linha
   do tempo entra na horizontal, como faixa, e vira o eixo da página. */

const fluxo = [
  {
    title: "Triagem inicial",
    text: "Ponto de entrada do processo, onde o caso é classificado e encaminhado dentro do sistema de gestão."
  },
  {
    title: "Condução acompanhada",
    text: "Alocação de tarefas, monitoramento de prazos e acompanhamento de atividades, com visão clara e organizada de cada caso."
  },
  {
    title: "Resolução final",
    text: "Encerramento com a garantia de que cada etapa foi concluída de acordo com os padrões estabelecidos."
  }
];

const capacidades = [
  {
    icon: "fa-solid fa-diagram-project",
    title: "Sistema de gestão integrado",
    text: "Um sistema que integra todas as etapas do processo judicial, oferecendo uma visão clara e organizada de cada caso."
  },
  {
    icon: "fa-solid fa-list-check",
    title: "Alocação de tarefas",
    text: "Distribuição estruturada das atividades entre a equipe, com responsabilidades definidas em cada fase."
  },
  {
    icon: "fa-solid fa-clock",
    title: "Monitoramento de prazos",
    text: "Controle dos prazos processuais e acompanhamento contínuo das atividades em andamento."
  },
  {
    icon: "fa-solid fa-robot",
    title: "Workflows automatizados",
    text: "Automações projetadas para otimizar cada fase do processo, da triagem inicial à resolução final."
  }
];

const ganhos = [
  {
    icon: "fa-solid fa-circle-check",
    title: "Menos erros humanos",
    text: "As automações reduzem a possibilidade de erros humanos ao longo do processo."
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "Mais produtividade",
    text: "A padronização das etapas aumenta a produtividade da equipe técnica."
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "Padrões assegurados",
    text: "Cada etapa é concluída de acordo com os padrões estabelecidos, com eficiência e precisão na execução."
  }
];

const faq = [
  {
    q: "O que o sistema de gestão acompanha?",
    a: "O sistema integra todas as etapas do processo judicial e facilita a alocação de tarefas, o monitoramento de prazos e o acompanhamento de atividades, garantindo maior eficiência e precisão na execução."
  },
  {
    q: "O que são os workflows automatizados?",
    a: "São automações projetadas para otimizar cada fase do processo, desde a triagem inicial até a resolução final, reduzindo a possibilidade de erros humanos e aumentando a produtividade."
  },
  {
    q: "Que benefício isso traz para o acompanhamento do caso?",
    a: "O sistema oferece uma visão clara e organizada de cada caso, o que permite acompanhar em que etapa o processo está e assegurar que cada fase seja concluída conforme os padrões estabelecidos."
  }
];

const AreaTecnologia = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="split"
      badge="Diferenciais"
      title="Tecnologia nos Processos de Controle"
      lede="Soluções inovadoras para o gerenciamento de processos judiciais, com sistemas de gestão e workflows avançados."
      image={tec}
      imageAlt="Tecnologia aplicada à gestão de processos"
    />

    <AreaSection
      eyebrow="O fluxo"
      title="Da triagem inicial à resolução final"
      intro="Os workflows automatizados são projetados para otimizar cada fase do processo, assegurando que nenhuma etapa avance sem estar concluída."
      tone="dark"
    >
      <AreaTimeline steps={fluxo} variant="horizontal" />
    </AreaSection>

    <AreaSection
      eyebrow="Recursos"
      title="O que sustenta a operação"
      tone="plain"
    >
      <AreaGrid items={capacidades} variant="bento" />
    </AreaSection>

    <AreaSection
      eyebrow="Resultado"
      title="O que isso muda na prática"
      tone="subtle"
    >
      <AreaGrid items={ganhos} variant="compact" />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Nossa área de tecnologia é dedicada a proporcionar soluções inovadoras
        para o gerenciamento de processos judiciais, garantindo maior eficiência
        e precisão na execução das tarefas.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a operação"
      tone="sand"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-tecnologia-controle" />
    </AreaSection>

    <AreaCTA
      title="Acompanhamento com método e previsibilidade"
      text="Fale com o escritório para conhecer como conduzimos e acompanhamos cada processo."
    />
  </AreaLayout>
);

export default AreaTecnologia;
