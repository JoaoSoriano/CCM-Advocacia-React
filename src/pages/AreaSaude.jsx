import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaChips from "../components/area/AreaChips";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import medico from "../img/medico.jpg";

/* Assinatura da página: texto mais curto do conjunto, então a página é enxuta
   — quatro tipos de questão em grade e os oito aspectos preventivos em chips,
   que é a forma de não perder a enumeração sem inflar a página com cards.
   O hero usa a variante de paisagem porque medico.jpg é 3:2 e pequena
   (1000×667): recortada em retrato perdia metade do enquadramento. */

const questoes = [
  {
    icon: "fa-solid fa-gavel",
    title: "Questões judiciais",
    text: "Atuação no contencioso, incluindo a defesa em processos nas esferas administrativas e judiciais."
  },
  {
    icon: "fa-solid fa-file-contract",
    title: "Questões contratuais",
    text: "Soluções abrangentes em matéria contratual para profissionais e empresas de saúde."
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Questões administrativas",
    text: "Representação e orientação em demandas administrativas, incluindo a defesa em processos éticos."
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "Questões regulatórias",
    text: "Acompanhamento das exigências regulatórias que incidem sobre a atividade em saúde."
  }
];

const aspectos = [
  "Éticos",
  "Civis",
  "Sanitários",
  "Adequação à LGPD",
  "Publicidade",
  "Administrativos",
  "Trabalhistas",
  "Tributários"
];

const faq = [
  {
    q: "Quem o escritório atende nesta área?",
    a: "Profissionais e empresas de saúde, como clínicas, laboratórios e hospitais, com um departamento técnico altamente qualificado e vasta experiência em demandas dessas classes."
  },
  {
    q: "A atuação é consultiva ou contenciosa?",
    a: "As duas. Atuamos de forma destacada no consultivo e no contencioso, incluindo a defesa em processos éticos e nas esferas administrativa e judicial."
  },
  {
    q: "O que a atuação preventiva abrange?",
    a: "Fornecemos uma atuação abrangente e preventiva para empresas de saúde, abordando aspectos éticos, civis, sanitários, de adequação à Lei Geral de Proteção de Dados Pessoais, de publicidade, administrativos, trabalhistas e tributários."
  }
];

const AreaSaude = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="wide"
      badge="Diferenciais"
      title="Direito para Profissionais da Saúde"
      lede="Escritório especializado em direito para profissionais da saúde, com vasta experiência nas demandas dessas classes e um departamento técnico altamente qualificado."
      image={medico}
      imageAlt="Profissional da saúde em atendimento"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Soluções abrangentes"
      intro="Nosso time está preparado para oferecer soluções abrangentes em questões relacionadas a profissionais e empresas de saúde, como clínicas, laboratórios e hospitais."
      tone="plain"
    >
      <AreaGrid items={questoes} variant="even" />
    </AreaSection>

    <AreaSection
      eyebrow="Atuação preventiva"
      title="Oito aspectos sob acompanhamento"
      intro="A atuação preventiva para empresas de saúde é abrangente e garante a conformidade e a segurança jurídica dos nossos clientes."
      tone="dark"
      width="narrow"
    >
      <AreaChips items={aspectos} />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Oferecemos um suporte jurídico completo e especializado, assegurando a
        melhor defesa e orientação para os Profissionais da Saúde.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-profissionais-saude" />
    </AreaSection>

    <AreaCTA
      title="Suporte jurídico para a sua atuação"
      text="Fale com o escritório para entender como o suporte especializado pode apoiar a sua rotina profissional ou a da sua empresa de saúde."
    />
  </AreaLayout>
);

export default AreaSaude;
