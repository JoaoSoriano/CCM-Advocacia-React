import PerfilLayout from "../components/perfil/PerfilLayout";
import PerfilHero from "../components/perfil/PerfilHero";
import PerfilSection from "../components/perfil/PerfilSection";
import PerfilCreds from "../components/perfil/PerfilCreds";
import PerfilTraits from "../components/perfil/PerfilTraits";
import PerfilStatement from "../components/perfil/PerfilStatement";
import PerfilSocios from "../components/perfil/PerfilSocios";
import PerfilContato from "../components/perfil/PerfilContato";
import escritorio from "../img/ESC_NOVO.jpeg";
import larissaImg from "../img/FotoLarissa .jpg";
import igorImg from "../img/igor.jpg";

/* Assinatura da página: manifesto institucional. Os três parágrafos originais
   já carregavam duas listas embutidas — os adjetivos da marca e os princípios
   do atendimento — que aqui viram peças próprias, e a frase de fechamento
   sobre litígio ganha um bloco escuro só dela. */

const definicoes = [
  {
    title: "Moderna",
    text: "Prática atualizada, atenta às transformações da legislação e do mercado."
  },
  {
    title: "Acessível",
    text: "Linguagem clara, sem juridiquês, e canais abertos em toda a tramitação."
  },
  {
    title: "Criativa",
    text: "Soluções desenhadas caso a caso, quando o caminho convencional não basta."
  },
  {
    title: "Profissional",
    text: "Rigor técnico, ética e sigilo em cada etapa do atendimento."
  },
  {
    title: "Digital",
    text: "Atendimento, reuniões e acompanhamento processual em ambiente digital."
  },
  {
    title: "Humana",
    text: "Escuta atenta: por trás de cada processo existe uma história."
  }
];

const metodo = [
  {
    title: "Atualização permanente",
    detail:
      "Os profissionais estão sempre atualizados sobre as últimas mudanças na legislação e na jurisprudência, de modo a oferecer a melhor orientação possível aos clientes."
  },
  {
    title: "Conhecimento especializado",
    detail:
      "Conhecimento aprofundado das leis e regulamentações específicas, fornecendo uma orientação adequada aos clientes."
  },
  {
    title: "Diálogo colaborativo",
    detail:
      "Quando estamos em sintonia com as partes, podemos melhor conduzi-las à construção de um diálogo colaborativo e efetivo na circunstância de igualdade de frequências, tanto no âmbito emocional quanto no prático."
  }
];

const socios = [
  {
    nome: "Larissa Carrazzoni",
    oab: "OAB/PE nº 60.623",
    img: larissaImg,
    link: "/larissa"
  },
  {
    nome: "Igor Campêlo",
    oab: "OAB/PE nº 60.547",
    img: igorImg,
    link: "/igor"
  }
];

const SobreNos = () => (
  <PerfilLayout>
    <PerfilHero
      variant="institution"
      eyebrow="O escritório"
      name="Sobre Nós"
      lede="O escritório nasceu a partir da união de especialidades e propósitos em comum que objetivam auxiliar Pessoas Jurídicas e Físicas na solução dos conflitos de forma simples e célere, promovendo maior satisfação para as partes envolvidas."
      image={escritorio}
      imageAlt="Equipe do escritório Carrazzoni & Campêlo Advocacia"
    />

    <PerfilSection
      eyebrow="Identidade"
      title="O que nos define"
      intro="A nossa equipe adquiriu vida própria, com suas características advindas do que acreditamos."
      tone="plain"
    >
      <PerfilTraits items={definicoes} />
    </PerfilSection>

    <PerfilStatement tone="subtle">
      Prezamos pela excelência, ética e profissionalismo desde a qualidade dos
      serviços prestados até o atendimento ao cliente.
    </PerfilStatement>

    <PerfilSection eyebrow="Método" title="Como trabalhamos" tone="plain">
      <PerfilCreds items={metodo} />
    </PerfilSection>

    <PerfilSection
      eyebrow="Equipe"
      title="Sócios fundadores"
      intro="Conheça a trajetória, a formação e a atuação institucional de cada sócio."
      tone="subtle"
    >
      <PerfilSocios socios={socios} />
    </PerfilSection>

    <PerfilStatement tone="dark">
    Compreensão humana, estratégia impecável e defesa intransigente do seu direito.
    </PerfilStatement>

    <PerfilContato
      title="Vamos conversar sobre o seu caso"
      text="Fale com o escritório para entender qual o melhor caminho para a sua questão."
    />
  </PerfilLayout>
);

export default SobreNos;
