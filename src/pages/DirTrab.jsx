import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaChips from "../components/area/AreaChips";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import trabalho from "../img/trabalho.jpg";

/* Assinatura da página: o texto se divide claramente entre prevenção e
   litígio, então os dois painéis com sublistas carregam a página. */

const frentes = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Atuação preventiva",
    text: "A prevenção é a chave para evitar litígios trabalhistas e garantir um ambiente de trabalho harmonioso.",
    items: [
      "Consultoria em legislação trabalhista, CLT, acordos coletivos e convenções sindicais",
      "Elaboração e análise de contratos de trabalho, políticas internas e regulamentos",
      "Treinamentos para gestores e equipes de recursos humanos",
      "Auditorias trabalhistas e revisão de procedimentos internos"
    ]
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Atuação contenciosa",
    text: "Em casos de litígios trabalhistas, representamos as empresas buscando sempre a melhor solução para cada caso.",
    items: [
      "Representação em processos judiciais e administrativos",
      "Defesa dos interesses das empresas em ações trabalhistas",
      "Negociação de acordos",
      "Redução de riscos financeiros e reputacionais"
    ]
  }
];

const temas = [
  "Jornada de trabalho",
  "Férias",
  "Benefícios",
  "Segurança e saúde no trabalho",
  "Gestão de recursos humanos"
];

const faq = [
  {
    q: "A consultoria cobre acordos coletivos e convenções sindicais?",
    a: "Sim. Auxiliamos empresas na interpretação e aplicação da Consolidação das Leis do Trabalho, de acordos coletivos e de convenções sindicais."
  },
  {
    q: "O escritório ajuda a montar políticas internas?",
    a: "Sim. Nossa equipe auxilia na elaboração e análise de contratos de trabalho, políticas internas, regulamentos e outros documentos essenciais para a gestão de recursos humanos."
  },
  {
    q: "Existe trabalho de prevenção antes de qualquer conflito?",
    a: "Sim. Atuamos na identificação de potenciais conflitos e na implementação de medidas preventivas adequadas, como treinamentos para gestores e equipes de recursos humanos, auditorias trabalhistas e a revisão de procedimentos internos."
  },
  {
    q: "Como é a atuação quando o litígio já existe?",
    a: "Representamos as empresas em processos judiciais e administrativos, com experiência na defesa dos seus interesses em ações trabalhistas, negociando acordos e buscando a redução de riscos financeiros e reputacionais."
  }
];

const DirTrab = () => (
  <AreaLayout tone="sand">
    <AreaHero
      variant="split"
      badge="Áreas de Atuação"
      title="Direito Trabalhista"
      lede="Soluções jurídicas para empresas que buscam conformidade legal, gestão eficiente de recursos humanos e mitigação de riscos nas relações de trabalho."
      image={trabalho}
      imageAlt="Ambiente corporativo de trabalho"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Da prevenção à defesa"
      intro="No complexo ambiente empresarial, a legislação trabalhista molda as relações entre empregadores e empregados. A atuação acompanha esse ciclo por inteiro."
      tone="plain"
    >
      <AreaGrid items={frentes} variant="duo" />
    </AreaSection>

    <AreaSection
      eyebrow="Temas recorrentes"
      title="Onde as dúvidas mais aparecem"
      intro="Orientamos sobre as questões que, na prática, concentram o maior risco de gerar conflitos trabalhistas."
      tone="sand"
      width="narrow"
    >
      <AreaChips items={temas} />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Nosso compromisso é oferecer um suporte jurídico completo e
        personalizado, para que as empresas possam se dedicar ao seu core
        business, enquanto cuidamos da segurança jurídica nas relações de
        trabalho.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-trabalhista" />
    </AreaSection>

    <AreaCTA
      title="Segurança jurídica nas relações de trabalho"
      text="Fale com o escritório para avaliar os riscos trabalhistas da sua operação e as medidas preventivas cabíveis."
    />
  </AreaLayout>
);

export default DirTrab;
