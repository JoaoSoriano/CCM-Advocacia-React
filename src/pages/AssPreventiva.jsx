import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import time from "../img/ASSE_NOVO.jpeg";

/* Assinatura da página: o texto original traz uma lista literal de dez
   benefícios, que aqui é a protagonista — grade compacta, sem ícone grande,
   para a enumeração ser lida como conjunto e não como dez blocos soltos. */

const motivos = [
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Proteção contra litígios",
    text: "É perceptível a alta demanda judicial no ramo empresarial. A assessoria preventiva é fundamental, pois pode ajudar a proteger a empresa de ações judiciais e administrativas."
  },
  {
    icon: "fa-solid fa-stethoscope",
    title: "Mais tempo para os pacientes",
    text: "Com uma assessoria jurídica especializada, o profissional de saúde tem mais tempo para dedicar a seus pacientes, contando com a proteção, a segurança jurídica e a tranquilidade que necessita."
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Proteção da reputação",
    text: "Há também a proteção da reputação da empresa: com nossa vasta experiência, identificamos e mitigamos riscos éticos e legais."
  }
];

const beneficios = [
  { icon: "fa-solid fa-user-tie", title: "Contratação jurídica de profissionais" },
  { icon: "fa-solid fa-folder-open", title: "Documentação" },
  { icon: "fa-solid fa-handshake", title: "Melhores relações com clientes e órgãos públicos" },
  { icon: "fa-solid fa-coins", title: "Controle e redução de custos" },
  { icon: "fa-solid fa-shield-halved", title: "Prevenção de problemas éticos e legais" },
  { icon: "fa-solid fa-piggy-bank", title: "Economia ao evitar custos com litígios" },
  { icon: "fa-solid fa-sitemap", title: "Melhor organização e gestão empresarial" },
  { icon: "fa-solid fa-face-smile", title: "Menor desgaste emocional" },
  { icon: "fa-solid fa-check-double", title: "Operações dentro da Lei" },
  { icon: "fa-solid fa-compass", title: "Suporte estratégico para decisões informadas" }
];

const faq = [
  {
    q: "Por que investir em prevenção em vez de resolver depois?",
    a: "Diante da realidade cotidiana, é perceptível a alta demanda judicial no ramo empresarial. A assessoria jurídica preventiva pode ajudar a proteger a empresa de ações judiciais e administrativas, gerando economia de recursos ao evitar custos com litígios."
  },
  {
    q: "A assessoria preventiva atende só a empresa ou também o profissional?",
    a: "Os dois lados se conectam. Por trás da maioria dos CPFs sempre há um CNPJ e, inevitavelmente, um e o outro repercutem entre si — por isso a atuação considera o profissional e a empresa em conjunto."
  },
  {
    q: "Como a assessoria protege a reputação da empresa?",
    a: "Com nossa vasta experiência, identificamos e mitigamos riscos éticos e legais antes que eles se convertam em conflito, o que preserva a reputação da empresa."
  }
];

const AssPrev = () => (
  <AreaLayout tone="sand">
    <AreaHero
      variant="overlay"
      badge="Diferenciais"
      title="Assessoria Jurídica Preventiva"
      lede="Proteção, segurança jurídica e tranquilidade para que a empresa e o profissional de saúde se dediquem ao que realmente importa."
      image={time}
      imageAlt="Equipe de advogados do escritório"
    />

    <AreaSection tone="plain" width="narrow">
      <AreaQuote tone="rule">
        Por trás da maioria dos CPFs, sempre há um CNPJ e, inevitavelmente, um e
        o outro repercutem entre si.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Por que prevenir"
      title="O que está em jogo"
      tone="plain"
    >
      <AreaGrid items={motivos} variant="even" />
    </AreaSection>

    <AreaSection
      eyebrow="Benefícios"
      title="Dez ganhos concretos"
      intro="A assessoria preventiva se traduz em vantagens que aparecem tanto no dia a dia da operação quanto no resultado do negócio."
      tone="sand"
    >
      <AreaGrid items={beneficios} variant="compact" />
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a assessoria"
      tone="plain"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-assessoria-preventiva" />
    </AreaSection>

    <AreaCTA
      title="Proteja a sua operação antes do conflito"
      text="Fale com o escritório para avaliar os riscos éticos e legais da sua empresa e as medidas preventivas cabíveis."
    />
  </AreaLayout>
);

export default AssPrev;
