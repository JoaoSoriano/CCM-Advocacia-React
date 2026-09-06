import AreaLayout from "../components/area/AreaLayout";
import AreaHero from "../components/area/AreaHero";
import AreaSection from "../components/area/AreaSection";
import AreaGrid from "../components/area/AreaGrid";
import AreaQuote from "../components/area/AreaQuote";
import AreaFAQ from "../components/area/AreaFAQ";
import AreaCTA from "../components/area/AreaCTA";
import dados from "../img/dados.jpg";

/* Assinatura da página: hero centrado com a imagem em placa e os seis serviços
   em duas fileiras de três. A linha do tempo fica reservada para a página de
   Compliance e LGPD, para as duas áreas — de conteúdo próximo — não abrirem com
   o mesmo recurso. */

const servicos = [
  {
    icon: "fa-solid fa-clipboard-check",
    title: "Consultoria e adequação",
    text: "Avaliações de conformidade e criação de políticas internas, estruturando a adequação da empresa à LGPD do diagnóstico à implementação."
  },
  {
    icon: "fa-solid fa-users",
    title: "Treinamento de colaboradores",
    text: "Capacitação das equipes na correta aplicação da LGPD, para que a política saia do papel e chegue à rotina de quem trata os dados."
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Análise de riscos",
    text: "Identificação e mitigação de riscos no tratamento de dados pessoais, apontando onde a operação está mais vulnerável."
  },
  {
    icon: "fa-solid fa-file-contract",
    title: "Contratos e políticas de privacidade",
    text: "Criação e revisão de contratos e políticas de privacidade, alinhando os documentos da empresa às exigências da lei."
  },
  {
    icon: "fa-solid fa-bell",
    title: "Atendimento a incidentes",
    text: "Respostas rápidas e eficazes diante de incidentes envolvendo dados pessoais."
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Assessoria contínua",
    text: "Monitoramento e atualização permanente das práticas de proteção de dados, acompanhando mudanças na operação e na regulação."
  }
];

const faq = [
  {
    q: "A adequação começa por onde?",
    a: "Pela consultoria e adequação, com avaliações de conformidade e criação de políticas internas que retratam como a empresa trata dados hoje e o que precisa mudar."
  },
  {
    q: "A equipe da clínica precisa ser treinada?",
    a: "Sim. Proporcionamos treinamento para capacitação de colaboradores na correta aplicação da LGPD, porque a conformidade depende de quem lida com os dados no dia a dia."
  },
  {
    q: "E se houver um incidente com dados de pacientes?",
    a: "Nossa expertise inclui o atendimento a incidentes, com respostas rápidas e eficazes."
  },
  {
    q: "O trabalho termina depois da implementação?",
    a: "Não. Oferecemos assessoria contínua, monitorando e atualizando as práticas de proteção de dados."
  }
];

const AreaLgpd = () => (
  <AreaLayout tone="light">
    <AreaHero
      variant="frame"
      badge="Diferenciais"
      title="Privacidade e Proteção de Dados"
      lede="Referência em assessoria jurídica preventiva para empresas de saúde na adequação e implementação da Lei Geral de Proteção de Dados Pessoais."
      image={dados}
      tint
      imageAlt="Proteção de dados pessoais"
    />

    <AreaSection
      eyebrow="O que fazemos"
      title="Da adequação ao acompanhamento"
      intro="Nossa equipe especializada cobre todo o percurso da LGPD dentro da empresa, do primeiro diagnóstico à manutenção da conformidade."
      tone="plain"
    >
      <AreaGrid items={servicos} variant="trio" />
    </AreaSection>

    <AreaSection tone="subtle" width="narrow">
      <AreaQuote tone="rule">
        Garanta a conformidade da sua clínica com a LGPD e proteja os dados dos
        seus pacientes.
      </AreaQuote>
    </AreaSection>

    <AreaSection
      eyebrow="Dúvidas frequentes"
      title="Perguntas sobre a LGPD"
      tone="plain"
      width="narrow"
    >
      <AreaFAQ items={faq} name="faq-privacidade-dados" />
    </AreaSection>

    <AreaCTA
      title="Sua clínica já está em conformidade?"
      text="Fale com o escritório para avaliar o estágio de adequação à LGPD e os próximos passos."
    />
  </AreaLayout>
);

export default AreaLgpd;
