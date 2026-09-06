import PerfilLayout from "../components/perfil/PerfilLayout";
import PerfilHero from "../components/perfil/PerfilHero";
import PerfilSection from "../components/perfil/PerfilSection";
import PerfilCreds from "../components/perfil/PerfilCreds";
import PerfilAreas from "../components/perfil/PerfilAreas";
import { AREAS } from "../components/perfil/areas";
import PerfilContato from "../components/perfil/PerfilContato";
import larissaPhoto from "../img/Larissa_nova.jpg";

/* A bio original era um parágrafo único com cerca de vinte credenciais
   separadas por ponto e vírgula. Aqui ela é decomposta em formação, atuação
   institucional atual, trajetória anterior e produção — nenhum item do texto
   original foi descartado; o que a bio traz de especialidade está no lede do
   hero, e não numa lista de áreas, porque os dois sócios atendem todas. */

const WHATSAPP = "https://wa.me/5581991517293";

/* Do mais recente para o mais antigo, como se lê um currículo. */
const formacao = [
  {
    title: "Mestranda em Direito Médico-Odontológico",
    detail: "São Leopoldo Mandic, São Paulo"
  },
  {
    title: "Especialista em Direito Médico e da Saúde",
    detail: "Instituto Paulista de Direito Médico e da Saúde (IPDMS)"
  },
  {
    title: "Pós-graduada em Direito Médico e da Saúde — LLM",
    detail: "Católica Business School, UNICAP"
  },
  {
    title: "Bacharela em Direito",
    detail: "Universidade Católica de Pernambuco (UNICAP)"
  }
];

const institucional = [
  {
    title: "Presidente da Comissão de Direito Médico e da Saúde",
    detail: "OAB Jaboatão"
  },
  {
    title:
      "Vice-Presidente e representante de PE da Comissão Nacional de Direito Odontológico",
    detail: "Associação Brasileira de Advogados (ABA)"
  },
  {
    title: "Membro da Unidade de Bioética do Real Hospital Português",
    detail:
      "Integrante da International Chair in Bioethics — World Medical Association Cooperating Centre"
  }
];

const trajetoria = [
  { title: "Sociedade Brasileira de Bioética/PE", detail: "Ex-membro" },
  { title: "Comissão de Perícias Forenses da OAB/PE", detail: "Ex-membro" },
  {
    title: "Comissão Nacional de Bioética da ABA",
    detail: "Ex-membro representante de PE"
  },
  {
    title: "Comissão Especial de Bioética e Biodireito da OAB/ES",
    detail: "Ex-membro consultor"
  }
];

const producao = [
  {
    title: "Professora em cursos, graduações e pós-graduações",
    detail: "Para profissionais da área de saúde"
  },
  {
    title: "Aulas de prática em ações de direito da saúde",
    detail: "CERS"
  },
  { title: "Autora de obras jurídicas" },
  { title: "Palestrante" }
];

const Larissa = () => (
  <PerfilLayout>
    <PerfilHero
      variant="person"
      eyebrow="Sócia fundadora"
      name="Larissa Carrazzoni"
      meta="OAB/PE nº 60.623"
      lede="Advogada. Atua com assessoria preventiva e defesa estratégica para profissionais e empresas de saúde e na saúde suplementar, com expertise em Integridade e LGPD. Mediadora extrajudicial e assessora jurídica parlamentar."
      image={larissaPhoto}
      imageAlt="Larissa Carrazzoni"
      social={{
        instagram:
          "https://www.instagram.com/larissacarrazzoni.adv?igsh=ZmFoaHR0ZHZ4NTM3",
        whatsapp: WHATSAPP,
        linkedin:
          "https://www.linkedin.com/in/larissa-carrazzoni-larissacarrazzoni-adv-912505206/?originalSubdomain=br"
      }}
    />

    <PerfilSection
      eyebrow="Atuação"
      title="Onde atuo"
      intro="Larissa atende todas as frentes do escritório. Cada uma tem uma página com o escopo do trabalho."
      tone="plain"
    >
      <PerfilAreas items={AREAS} />
    </PerfilSection>

    <PerfilSection eyebrow="Formação" title="Formação acadêmica" tone="subtle">
      <PerfilCreds items={formacao} />
    </PerfilSection>

    <PerfilSection
      eyebrow="Representação"
      title="Atuação institucional"
      intro="Cargos e vínculos atuais em comissões e entidades da área médica, odontológica e de bioética."
      tone="plain"
    >
      <PerfilCreds items={institucional} />
    </PerfilSection>

    <PerfilSection eyebrow="Trajetória" title="Vínculos anteriores" tone="subtle">
      <PerfilCreds items={trajetoria} />
    </PerfilSection>

    <PerfilSection eyebrow="Produção" title="Docência e publicações" tone="plain">
      <PerfilCreds items={producao} />
    </PerfilSection>

    <PerfilContato
      title="Falar com Larissa Carrazzoni"
      text="Para tratar de assessoria preventiva, saúde suplementar, adequação à LGPD ou mediação extrajudicial."
      whatsapp={WHATSAPP}
    />
  </PerfilLayout>
);

export default Larissa;
