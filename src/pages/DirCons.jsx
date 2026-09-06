import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import consumidor from "../img/consumidor.jpg";

/* Assinatura da página: hero com imagem sangrando, bento nas frentes de
   consumo e um par final separando relação de consumo de relação comercial —
   os dois âmbitos que o texto trata em parágrafos distintos. */

const consumo = [
  {
    icon: "fa-solid fa-file-contract",
    title: "Documentação de consumo",
    text: "Elaboração e revisão de contratos, políticas de troca e devolução, termos de uso e outras documentações essenciais para garantir transparência e segurança nas relações de consumo."
  },
  {
    icon: "fa-solid fa-bullhorn",
    title: "Publicidade e práticas comerciais",
    text: "Orientação sobre publicidade enganosa, práticas abusivas e outras demandas que possam gerar litígios com consumidores."
  },
  {
    icon: "fa-solid fa-box-open",
    title: "Responsabilidade por produtos e serviços",
    text: "Orientação sobre responsabilidade por produtos e serviços, com abordagem preventiva diante da complexidade do Código de Defesa do Consumidor."
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Defesa em litígios",
    text: "Atuação na defesa dos interesses das empresas em processos administrativos e judiciais, buscando sempre a melhor solução para cada caso."
  }
];

const ambitos = [
  {
    icon: "fa-solid fa-cart-shopping",
    title: "Relações de consumo",
    text: "Assessoria jurídica completa para empresas que buscam conformidade legal, mitigação de riscos e otimização de suas relações comerciais, com foco na prevenção.",
    items: [
      "Conformidade com o Código de Defesa do Consumidor",
      "Boas práticas e excelência no atendimento ao consumidor",
      "Defesa em processos administrativos e judiciais"
    ]
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Relações comerciais",
    text: "Relações sólidas e seguras com distribuidores, fornecedores e parceiros, com proteção dos interesses da empresa em todas as etapas.",
    items: [
      "Elaboração e revisão de contratos comerciais",
      "Proteção ao longo da cadeia de suprimentos e parcerias estratégicas",
      "Acordos de confidencialidade (NDAs) para dados sensíveis"
    ]
  }
];

const faq = [
  {
    q: "A assessoria é preventiva ou só atua em litígios?",
    a: "Ambas. Acreditamos que a prevenção é a chave para evitar problemas futuros, e por isso incentivamos a adoção de boas práticas e a busca constante pela excelência no atendimento ao consumidor, sem deixar de atuar na defesa em processos administrativos e judiciais."
  },
  {
    q: "Quais documentos costumam ser revisados?",
    a: "Auxiliamos na elaboração e revisão de contratos, políticas de troca e devolução, termos de uso e outras documentações essenciais para garantir a transparência e a segurança nas relações de consumo."
  },
  {
    q: "O escritório trata de contratos com fornecedores e parceiros?",
    a: "Sim. Auxiliamos na elaboração e revisão de contratos comerciais, garantindo a proteção dos interesses da empresa em todas as etapas da cadeia de suprimentos e parcerias estratégicas."
  },
  {
    q: "É possível proteger informações estratégicas compartilhadas?",
    a: "Sim. Auxiliamos na elaboração de acordos de confidencialidade (NDAs), assegurando a segurança e o sigilo de dados compartilhados com parceiros, fornecedores e outros stakeholders."
  }
];

const DirCons = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="overlay"
      badge="Áreas de Atuação"
      title="Direito do Consumidor"
      lede="Soluções jurídicas para empresas que buscam conformidade legal, mitigação de riscos e otimização das suas relações de consumo e comerciais."
      image={consumidor}
      imageAlt="Relação de consumo em ambiente comercial"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Frentes de atuação"
      intro="A complexidade do Código de Defesa do Consumidor exige uma abordagem preventiva e estratégica, e é dela que parte todo o trabalho."
      tone="plain"
    >
      <AreaGrid items={consumo} variant="bento" />
    </AreaSection>

    <AreaSection
      eyebrow="Dois âmbitos"
      title="Consumo e cadeia comercial"
      tone="subtle"
      align="center"
    >
      <AreaGrid items={ambitos} variant="duo" />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Nosso compromisso é oferecer um suporte jurídico completo e
        personalizado, para que as empresas possam se dedicar ao seu core
        business, enquanto nós cuidamos da segurança jurídica nas relações de
        consumo e comerciais.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="sand"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-consumidor" />
    </AreaSection>

    <AreaCTA
      title="Da análise de riscos à defesa em litígios"
      text="Fale com o escritório para avaliar a conformidade das suas relações de consumo e da sua cadeia de parceiros."
    />
  </AreaLayout>
);

export default DirCons;
