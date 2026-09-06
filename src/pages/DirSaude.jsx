import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import saude from "../img/saude.jpg";

/* Assinatura da página: hero centrado com faixa de imagem larga e o par
   suplementar/SUS em destaque, que é o eixo que organiza este texto. */

const sistemas = [
  {
    icon: "fa-solid fa-hospital",
    title: "Saúde suplementar",
    text: "Atuação junto às operadoras de planos de saúde. O conhecimento aprofundado das normas e regulamentações do setor permite a construção de argumentações robustas e a busca por soluções eficazes."
  },
  {
    icon: "fa-solid fa-heart-pulse",
    title: "Sistema Único de Saúde",
    text: "Atuação no âmbito do SUS com a mesma estrutura altamente qualificada e dedicada à salvaguarda desses direitos, do acesso a procedimentos ao fornecimento de tratamentos."
  }
];

const demandas = [
  {
    icon: "fa-solid fa-ban",
    title: "Negativa de procedimentos",
    text: "Casos de negativa de procedimentos cruciais são tratados com presteza e assertividade, reconhecendo a urgência e a delicadeza envolvidas, seja no contexto dos planos de saúde ou do SUS."
  },
  {
    icon: "fa-solid fa-pills",
    title: "Medicamentos de alto custo",
    text: "Análise meticulosa dos casos, coleta de evidências científicas e apresentação de argumentos jurídicos consistentes para garantir os tratamentos prescritos pelos médicos."
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Reajustes e cancelamentos",
    text: "Proteção contra práticas abusivas, como reajustes exorbitantes de mensalidades e cancelamentos indevidos, com exame minucioso dos contratos e das justificativas das operadoras."
  },
  {
    icon: "fa-solid fa-receipt",
    title: "Reembolsos",
    text: "Obtenção de reembolsos para beneficiários que arcaram com despesas médicas cobertas por seus planos de saúde."
  }
];

const faq = [
  {
    q: "A atuação cobre planos de saúde e também o SUS?",
    a: "Sim. O escritório atua de forma especializada na seara do direito à saúde abraçando tanto a esfera da saúde suplementar quanto o Sistema Único de Saúde."
  },
  {
    q: "Toda demanda precisa virar processo judicial?",
    a: "Não. A busca por soluções eficazes acontece tanto por meio de negociações extrajudiciais quanto por ações judiciais, conforme o que cada caso exigir."
  },
  {
    q: "É possível contestar um reajuste de mensalidade?",
    a: "Sim. Examinamos minuciosamente os contratos e as justificativas apresentadas pelas operadoras, bem como as normas e regulamentações, buscando identificar irregularidades e assegurar que os pacientes sejam tratados com equidade e transparência."
  },
  {
    q: "Como funciona a busca por medicamentos de alto custo?",
    a: "A atuação envolve a análise meticulosa dos casos, a coleta de evidências científicas e a apresentação de argumentos jurídicos consistentes, visando garantir o cumprimento das obrigações das operadoras de planos de saúde e do SUS."
  }
];

const DirSaude = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="panel"
      badge="Áreas de Atuação"
      title="Direito à Saúde"
      lede="Atuação especializada na salvaguarda do direito à saúde, em demandas que vão de negativas de procedimentos ao acesso a medicamentos de alto custo."
      image={saude}
      imageAlt="Atendimento em ambiente de saúde"
    />

    <AreaSection
      eyebrow="Onde atuamos"
      title="Duas frentes, a mesma estrutura"
      tone="plain"
      align="center"
    >
      <AreaGrid items={sistemas} variant="duo" />
    </AreaSection>

    <AreaSection
      eyebrow="Demandas"
      title="O que costumamos resolver"
      intro="A atuação se desdobra em um espectro abrangente de demandas, frequentemente determinantes para a sobrevida e a qualidade de vida dos pacientes."
      tone="subtle"
    >
      <AreaGrid items={demandas} variant="even" />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Nosso compromisso é garantir que todos os pacientes tenham pleno acesso
        aos seus direitos fundamentais à saúde.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="sand"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-saude" />
    </AreaSection>

    <AreaCTA
      title="Teve um procedimento ou medicamento negado?"
      text="Casos de negativa exigem presteza. Fale com o escritório para entender os caminhos possíveis, na via extrajudicial ou judicial."
    />
  </AreaLayout>
);

export default DirSaude;
