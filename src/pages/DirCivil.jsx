import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaTimeline from "../components/area/AreaTimeline";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import civil from "../img/civil-novo.jpg";

/* Assinatura da página: hero em overlay — a foto é paisagem 3:2 e sangra bem —
   e uma linha do tempo vertical no corpo. O texto original descreve um ciclo
   encadeado de verdade (identificar vulnerabilidade → instrumentar → defender),
   que é o critério para a timeline aparecer numa página. */

const movimentos = [
  {
    title: "Diagnóstico e prevenção",
    text: "Identificamos as vulnerabilidades da relação civil antes que virem conflito, mapeando os riscos operacionais e pessoais que o contrato ou a posse do bem já carrega."
  },
  {
    title: "Instrumentos jurídicos sólidos",
    text: "Estruturamos e analisamos minuciosamente contratos civis e imobiliários, para que o documento sustente o direito no dia em que ele for questionado."
  },
  {
    title: "Defesa no contencioso",
    text: "Quando o impasse chega ao Judiciário ou à arbitragem, a condução é técnica e combativa, com a estratégia desenhada para o caso e não para o tipo de ação."
  }
];

const materias = [
  {
    icon: "fa-solid fa-file-signature",
    title: "Contratos civis e imobiliários",
    text: "Estruturação e análise dos instrumentos que sustentam o negócio e a transferência de bens."
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Responsabilidade civil",
    text: "Apuração do dever de reparar e defesa de quem é acionado por dano material, moral ou estético."
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Indenizações",
    text: "Quantificação e cobrança do prejuízo sofrido, pela via judicial ou por acordo."
  },
  {
    icon: "fa-solid fa-house-chimney",
    title: "Direitos possessórios",
    text: "Posse, propriedade e as ações que protegem o imóvel de turbação ou esbulho."
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Recuperação de créditos",
    text: "Cobrança e execução dos títulos e contratos inadimplidos, com foco no resultado útil."
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Arbitragem e soluções negociais",
    text: "Condução da controvérsia fora do Judiciário, quando a via arbitral ou o acordo é o caminho mais eficiente."
  }
];

const faq = [
  {
    q: "A atuação é só para empresas?",
    a: "Não. Atuamos para pessoas físicas e jurídicas — a proteção do patrimônio e a segurança das relações civis valem para as duas."
  },
  {
    q: "O escritório revisa contratos antes da assinatura?",
    a: "Sim, e é onde a atuação rende mais. Na esfera preventiva identificamos vulnerabilidades e elaboramos instrumentos jurídicos sólidos para mitigar riscos operacionais e pessoais, antes de existir litígio."
  },
  {
    q: "Vocês atuam em arbitragem?",
    a: "Sim. Diante de impasses, atuamos tanto em processos judiciais quanto arbitrais, com postura e táticas de defesa personalizadas para cada caso."
  },
  {
    q: "Dá para recuperar um crédito já vencido?",
    a: "A recuperação de créditos é uma das frentes da atuação. O caminho — cobrança, acordo ou execução — depende do título e do prazo, e é justamente isso que avaliamos antes de escolher."
  }
];

const DirCivil = () => (
  <AreaLayout tone="warm">
    <AreaHero
      variant="overlay"
      badge="Áreas de Atuação"
      title="Direito Civil e Negocial"
      lede="Soluções jurídicas estratégicas na prevenção de conflitos, gestão de contratos e proteção patrimonial, aliando consultoria técnica a uma defesa firme e combativa no contencioso cível."
      image={civil}
      imageAlt="Assinatura de contrato civil"
    />

    <AreaSection
      eyebrow="Como atuamos"
      title="Da vulnerabilidade à defesa"
      intro="As relações civis exigem segurança jurídica contínua e precisão técnica. A atuação acompanha o ciclo inteiro, do risco que ainda não virou processo à defesa quando ele já existe."
      tone="plain"
    >
      <AreaTimeline steps={movimentos} variant="vertical" />
    </AreaSection>

    <AreaSection
      eyebrow="Escopo"
      title="O que abrangemos"
      intro="Controvérsias das mais variadas complexidades, para pessoas físicas e jurídicas."
      tone="sand"
    >
      <AreaGrid items={materias} variant="trio" />
    </AreaSection>

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Diante de impasses ou processos judiciais e arbitrais, atuamos com
        postura e táticas de defesa personalizadas, buscando a máxima eficiência
        na tutela dos direitos, na preservação de bens e no ressarcimento de
        prejuízos.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a atuação cível"
      tone="subtle"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-direito-civil" />
    </AreaSection>

    <AreaCTA
      title="Proteja o patrimônio antes do conflito"
      text="Fale com o escritório para avaliar um contrato, um risco possessório ou uma controvérsia já instalada."
    />
  </AreaLayout>
);

export default DirCivil;
