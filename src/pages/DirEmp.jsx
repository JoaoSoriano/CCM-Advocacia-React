import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaChips from "../components/area/AreaChips";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import empresarial from "../img/empresarial-novo.jpg";

/* Assinatura da página: masthead travado na tela — a foto é retrato 4:5, a
   mesma proporção que a variante recorta, então não se perde enquadramento — e
   um bento de quatro frentes no corpo. A faixa escura não lista serviço de
   novo: diz em que momento a empresa procura o escritório. */

const frentes = [
  {
    icon: "fa-solid fa-file-signature",
    title: "Contratos comerciais",
    text: "Elaboração e análise minuciosa dos instrumentos que sustentam a operação, do fornecimento à distribuição, com o passivo mapeado antes da assinatura."
  },
  {
    icon: "fa-solid fa-sitemap",
    title: "Governança societária",
    text: "Acordos de sócios, regras de deliberação e a estrutura de poder que evita o conflito antes de ele existir."
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Reorganizações corporativas",
    text: "Estruturação de operações societárias com segurança jurídica nas tomadas de decisão e custo previsto."
  },
  {
    icon: "fa-solid fa-gavel",
    title: "Contencioso empresarial",
    text: "Processos judiciais, arbitrais e administrativos conduzidos com táticas de defesa construídas para o caso concreto."
  }
];

const momentos = [
  "Entrada ou saída de sócio",
  "Novo contrato relevante",
  "Fusão ou reorganização",
  "Conflito entre sócios",
  "Ação judicial contra a empresa",
  "Rodada de investimento"
];

const faq = [
  {
    q: "A assessoria serve para empresa de qualquer porte?",
    a: "Sim. O que muda é o desenho: a assessoria é consultiva, preventiva e personalizada, e parte da operação real da empresa em vez de um pacote padrão."
  },
  {
    q: "Vocês cuidam de conflito entre sócios?",
    a: "Sim. A resolução estratégica de conflitos societários é uma das frentes — e ela começa na governança, porque acordo de sócios e regras de deliberação bem feitos evitam boa parte desses impasses."
  },
  {
    q: "O escritório atua em arbitragem?",
    a: "Sim. Conduzimos processos judiciais, arbitrais e administrativos, com postura técnica e táticas de defesa personalizadas para resguardar a saúde financeira e a reputação da empresa."
  },
  {
    q: "Dá para contratar só a parte consultiva?",
    a: "Dá. Muitas empresas começam pela análise de contratos e pela governança societária, que é onde a atuação preventiva mais reduz passivo."
  }
];

const DirEmp = () => (
  <AreaLayout tone="sand">
    <AreaHero
      variant="frame"
      badge="Áreas de Atuação"
      title="Direito Empresarial e Societário"
      lede="No dinâmico cenário corporativo, uma atuação jurídica preventiva, estratégica e defensiva é fundamental para mitigar riscos, otimizar processos e garantir a sustentabilidade e expansão do seu negócio."
      image={empresarial}
      imageAlt="Reunião societária em ambiente corporativo"
    />

    <AreaSection
      eyebrow="O que fazemos"
      title="Da governança à demanda judicial"
      intro="O Direito Empresarial tem papel estratégico tanto na prevenção de falhas quanto na defesa da empresa em juízo. A atuação cobre as duas pontas."
      tone="plain"
    >
      <AreaGrid items={frentes} variant="bento" />
    </AreaSection>

    <AreaSection
      eyebrow="Quando nos procurar"
      title="Os momentos em que a decisão não admite improviso"
      intro="São as horas em que uma escolha tomada sem base jurídica vira passivo anos depois."
      tone="dark"
      width="narrow"
    >
      <AreaChips items={momentos} />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Combinamos rigor técnico e visão de negócios para conferir conformidade
        jurídica e previsibilidade, minimizar prejuízos e manter um ambiente
        seguro para o crescimento do seu empreendimento.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação empresarial"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-empresarial" />
    </AreaSection>

    <AreaCTA
      title="Segurança jurídica para o negócio crescer"
      text="Fale com o escritório para mapear os passivos da operação e estruturar contratos, governança e defesa."
    />
  </AreaLayout>
);

export default DirEmp;
