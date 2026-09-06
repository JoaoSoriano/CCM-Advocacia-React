import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaChips from "../components/area/AreaChips";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import shakehand from "../img/shakehand.jpg";

/* Assinatura da página: o texto se organiza em torno de três públicos —
   empresas, profissionais e pacientes — e fecha com o parágrafo mais forte do
   conjunto, que aqui recebe citação em bloco escuro em vez de filete. */

const frentes = [
  {
    icon: "fa-solid fa-hospital",
    title: "Empresas de saúde",
    text: "Ferramenta poderosa para otimizar a gestão de conflitos, seja em negociações com fornecedores, disputas contratuais, questões regulatórias ou situações envolvendo pacientes.",
    items: [
      "Acordos mutuamente satisfatórios",
      "Preservação de relacionamentos comerciais",
      "Confidencialidade que protege a reputação"
    ]
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Relações profissionais",
    text: "Espaço seguro e neutro para o diálogo, aplicável a desentendimentos entre colegas, questões trabalhistas, conflitos éticos e mudanças organizacionais.",
    items: [
      "Comunicação aberta e honesta",
      "Identificação de interesses comuns",
      "Ambiente de trabalho mais harmonioso e produtivo"
    ]
  },
  {
    icon: "fa-solid fa-heart",
    title: "Relação com o paciente",
    text: "Abordagem humanizada para lidar com queixas, insatisfações, reclamações sobre atendimento ou alegações de dano na prestação de serviço.",
    items: [
      "Diálogo aberto entre paciente e instituição",
      "Solução que restaura a confiança",
      "Fortalecimento do vínculo e da fidelização"
    ]
  }
];

const beneficios = [
  {
    icon: "fa-solid fa-coins",
    title: "Menos custo",
    text: "Evita os custos financeiros inerentes aos processos judiciais, que costumam ser longos e onerosos."
  },
  {
    icon: "fa-solid fa-clock",
    title: "Menos tempo",
    text: "Resolve o problema específico de forma mais ágil do que a via judicial permitiria."
  },
  {
    icon: "fa-solid fa-face-smile",
    title: "Menos desgaste",
    text: "Reduz o desgaste emocional envolvido na disputa, para todas as partes."
  },
  {
    icon: "fa-solid fa-lock",
    title: "Confidencialidade",
    text: "A confidencialidade inerente à mediação evita a exposição pública de desavenças e protege a reputação da instituição."
  }
];

const tecnicas = [
  "Comunicação efetiva",
  "Escuta ativa",
  "Comunicação não violenta",
  "Mediação organizacional"
];

const faq = [
  {
    q: "A mediação substitui o processo judicial?",
    a: "Ela oferece um caminho alternativo. Ao invés de recorrer imediatamente ao litígio judicial, a mediação oferece um caminho colaborativo e eficiente para a resolução de disputas, evitando processos longos e custosos."
  },
  {
    q: "O que é discutido na mediação fica preservado?",
    a: "Sim. A confidencialidade inerente ao processo de mediação protege a reputação da empresa, evitando a exposição pública de desavenças."
  },
  {
    q: "A mediação serve para conflitos internos da equipe?",
    a: "Sim. Pode ser utilizada para resolver desentendimentos entre colegas, questões trabalhistas, conflitos éticos ou para facilitar a comunicação em processos de reestruturação ou mudanças organizacionais."
  },
  {
    q: "Como a mediação afeta a relação com o paciente?",
    a: "Ao invés de polarizar a relação, a mediação permite que o paciente e a empresa de saúde dialoguem abertamente e busquem uma solução que restaure a confiança, a satisfação e o bem-estar do paciente, fortalecendo o vínculo com a instituição."
  }
];

const AreaMediacao = () => (
  <AreaLayout tone="sand">
    <AreaHero
      variant="overlay"
      badge="Diferenciais"
      title="Mediação Extrajudicial"
      lede="Um caminho colaborativo e eficiente para a resolução de disputas no setor da saúde, promovendo uma cultura de diálogo e entendimento mútuo."
      image={shakehand}
      imageAlt="Aperto de mãos selando um acordo"
    />

    <AreaSection
      eyebrow="Três frentes"
      title="Onde a mediação atua"
      intro="Em um cenário onde as relações no setor da saúde envolvem múltiplos atores — empresas, profissionais e pacientes — a mediação emerge como um diferencial estratégico para situações complexas e conflituosas."
      tone="plain"
    >
      <AreaGrid items={frentes} variant="even" />
    </AreaSection>

    <AreaSection
      eyebrow="Vantagens"
      title="O que se evita e o que se preserva"
      tone="sand"
    >
      <AreaGrid items={beneficios} variant="compact" />
    </AreaSection>

    <AreaSection
      eyebrow="Técnicas"
      title="Como conduzimos o diálogo"
      intro="Investir em treinamentos com essas técnicas valoriza colaboradores e pacientes, e refina a cultura interna da instituição."
      tone="plain"
      width="narrow"
    >
      <AreaChips items={tecnicas} />
    </AreaSection>

    <AreaSection tone="subtle" width="narrow" align="center">
      <AreaQuote tone="dark">
        Em um setor tão sensível como o da saúde, onde a confiança e o bem-estar
        são primordiais, a mediação extrajudicial se consolida como uma
        ferramenta essencial para construir relações mais sólidas, justas,
        humanizadas e duradouras.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a mediação"
      tone="plain"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-mediacao-extrajudicial" />
    </AreaSection>

    <AreaCTA
      title="Existe um conflito que ainda pode ser resolvido pelo diálogo?"
      text="Fale com o escritório para avaliar se a mediação extrajudicial é o caminho mais adequado para o seu caso."
    />
  </AreaLayout>
);

export default AreaMediacao;
