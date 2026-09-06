import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaTimeline from "../components/area/AreaTimeline";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import plano from "../img/plano.jpg";

/* Assinatura da página: o conteúdo é próximo ao de Direito à Saúde, então a
   diferenciação vem do recorte — aqui o eixo é o método de condução do caso,
   que este texto descreve passo a passo, e não o par suplementar/SUS. */

const metodo = [
  {
    title: "Análise minuciosa do caso",
    text: "Exame detalhado da situação, dos contratos e das justificativas apresentadas pelas operadoras, à luz das normas e regulamentações aplicáveis."
  },
  {
    title: "Coleta de evidências científicas",
    text: "Reunião da documentação médica e das evidências científicas que sustentam a necessidade do procedimento ou do tratamento prescrito."
  },
  {
    title: "Construção da argumentação",
    text: "Apresentação de argumentos jurídicos consistentes, apoiados no profundo conhecimento das normas e regulamentações do setor."
  },
  {
    title: "Negociação ou ação judicial",
    text: "Busca por soluções eficazes, seja por meio de negociações extrajudiciais estratégicas, seja através de ações judiciais assertivas."
  }
];

const demandas = [
  {
    icon: "fa-solid fa-ban",
    title: "Recusa de cobertura",
    text: "Compreendemos a urgência e a sensibilidade inerentes aos casos de recusa de cobertura, atuando com agilidade e precisão para assegurar a saúde e o bem-estar dos pacientes, tanto nos planos de saúde quanto no SUS."
  },
  {
    icon: "fa-solid fa-pills",
    title: "Medicamentos de alto custo",
    text: "Garantia de acesso a medicamentos de alto custo, frequentemente vitais para a sobrevida e a qualidade de vida, assegurando o cumprimento das obrigações das operadoras e do SUS."
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Reajustes exorbitantes",
    text: "Defesa dos beneficiários contra reajustes exorbitantes de mensalidades, com exame meticuloso dos contratos e das justificativas das operadoras."
  },
  {
    icon: "fa-solid fa-file-circle-xmark",
    title: "Cancelamentos indevidos",
    text: "Atuação contra cancelamentos indevidos, buscando identificar irregularidades e assegurar tratamento com equidade e transparência."
  },
  {
    icon: "fa-solid fa-receipt",
    title: "Reembolsos",
    text: "Obtenção de reembolsos para beneficiários que arcaram com despesas médicas cobertas por seus planos, garantindo a restituição de valores devidos."
  }
];

const faq = [
  {
    q: "A atuação alcança o SUS ou apenas planos de saúde?",
    a: "Ambos. A atuação abrange tanto a saúde suplementar quanto o Sistema Único de Saúde, com uma estrutura altamente qualificada e dedicada à proteção desses direitos."
  },
  {
    q: "Quanto tempo se espera diante de uma recusa de cobertura?",
    a: "Compreendemos a urgência e a sensibilidade inerentes aos casos de recusa de cobertura e atuamos com agilidade e precisão para assegurar a saúde e o bem-estar dos pacientes."
  },
  {
    q: "É preciso entrar na Justiça em todos os casos?",
    a: "Não. O profundo conhecimento das normas do setor permite buscar soluções eficazes por meio de negociações extrajudiciais estratégicas, recorrendo a ações judiciais quando o caso exige."
  },
  {
    q: "Despesas já pagas do próprio bolso podem ser reembolsadas?",
    a: "Sim. A expertise do escritório se estende à obtenção de reembolsos para beneficiários que arcaram com despesas médicas cobertas por seus planos de saúde, garantindo a restituição de valores devidos."
  }
];

const SaudeSuplementar = () => (
  <AreaLayout tone="warm">
    <AreaHero
      variant="split"
      badge="Diferenciais"
      title="Saúde Suplementar"
      lede="Atuação especializada e estratégica na proteção intransigente dos direitos, da recusa de cobertura ao acesso a tratamentos de alto custo."
      image={plano}
      imageAlt="Plano de saúde e atendimento ao beneficiário"
    />

    <AreaSection
      eyebrow="Demandas"
      title="O que costumamos enfrentar"
      intro="Nossa expertise se manifesta em um leque abrangente de demandas cruciais, frequentemente vitais para a sobrevida e a qualidade de vida dos pacientes."
      tone="plain"
    >
      <AreaGrid items={demandas} variant="bento" />
    </AreaSection>

    <AreaSection
      eyebrow="Método"
      title="Como conduzimos cada caso"
      intro="A atuação segue um percurso definido, do exame inicial da documentação à escolha da via mais eficaz para resolver a demanda."
      tone="dark"
    >
      <AreaTimeline steps={metodo} />
    </AreaSection>

    <AreaSection tone="warm" width="narrow" align="center">
      <AreaQuote tone="dark">
        Nosso compromisso inabalável é assegurar que todos os pacientes tenham
        pleno acesso aos seus direitos fundamentais à saúde, utilizando de nossa
        expertise para transformar desafios em soluções concretas e eficazes.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="plain"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-saude-suplementar" />
    </AreaSection>

    <AreaCTA
      title="Seu plano negou um procedimento ou medicamento?"
      text="Casos de recusa de cobertura exigem agilidade. Fale com o escritório para entender os caminhos possíveis."
    />
  </AreaLayout>
);

export default SaudeSuplementar;
