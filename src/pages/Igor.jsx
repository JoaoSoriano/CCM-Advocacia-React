import PerfilLayout from "../components/perfil/PerfilLayout";
import PerfilHero from "../components/perfil/PerfilHero";
import PerfilSection from "../components/perfil/PerfilSection";
import PerfilCreds from "../components/perfil/PerfilCreds";
import PerfilAreas from "../components/perfil/PerfilAreas";
import { AREAS } from "../components/perfil/areas";
import PerfilContato from "../components/perfil/PerfilContato";
import igorPhoto from "../img/igor_nova.jpeg";

/* A bio dele traz os anos de cada cargo, então esta página usa a calha de
   período das credenciais — é a assinatura que a distingue da da Larissa,
   cuja bio separa os vínculos entre atuais e anteriores, sem datas. */

const WHATSAPP = "https://wa.me/5581996085372";

const formacao = [
  {
    title: "Pós-graduado em Direito da Saúde",
    detail: "Verbo Jurídico"
  },
  {
    title: "Bacharel em Direito",
    detail: "Universidade Católica de Pernambuco"
  }
];

const institucional = [
  {
    period: "2025 — atual",
    title: "Vice-Presidente da Comissão de Direito Médico e da Saúde",
    detail: "OAB/Jaboatão"
  },
  {
    period: "2024",
    title: "Secretário-Geral da Comissão de Direito Médico e da Saúde",
    detail: "OAB/Jaboatão"
  },
  {
    period: "2024",
    title: "Assessor jurídico parlamentar em Direito Público"
  },
  {
    period: "2022",
    title:
      "Membro do GT de Saúde Suplementar da Comissão de Direito do Consumidor",
    detail: "OAB/PE"
  },
  {
    period: "2022",
    title: "Membro da Comissão de Direito de Família",
    detail: "OAB/PE"
  },
  {
    title: "Membro da Comissão de Direito Médico e da Saúde",
    detail: "OAB/Jaboatão"
  }
];

const producao = [
  {
    period: "2022 — atual",
    title: "Tutor em Direito Tributário",
    detail: "Preparatórios para o exame da Ordem"
  },
  {
    title: "Professor e palestrante",
    detail: "Cursos de prática jurídica em saúde"
  },
  { title: "Autor de obras jurídicas" }
];

const Igor = () => (
  <PerfilLayout>
    <PerfilHero
      variant="person"
      eyebrow="Sócio fundador"
      name="Igor Campêlo"
      meta="OAB/PE nº 60.547"
      lede="Advogado. Possui experiência em Direito Médico e da Saúde, com ampla atuação em escritórios especializados na área, e atuou como assessor jurídico parlamentar em Direito Público."
      image={igorPhoto}
      imageAlt="Igor Campêlo"
      social={{
        instagram:
          "https://www.instagram.com/igorcampelo_adv?igsh=MWMwZ2tqMGlsbnVwcA==",
        whatsapp: WHATSAPP
      }}
    />

    <PerfilSection
      eyebrow="Atuação"
      title="Onde atuo"
      intro="Igor atende todas as frentes do escritório. Cada uma tem uma página com o escopo do trabalho."
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
      intro="Cargos e vínculos em comissões da OAB e na assessoria parlamentar."
      tone="plain"
    >
      <PerfilCreds items={institucional} />
    </PerfilSection>

    <PerfilSection eyebrow="Produção" title="Docência e publicações" tone="subtle">
      <PerfilCreds items={producao} />
    </PerfilSection>

    <PerfilContato
      title="Falar com Igor Campêlo"
      text="Para tratar de demandas em Direito Médico e da Saúde, saúde suplementar ou Direito Público."
      whatsapp={WHATSAPP}
      tone="plain"
    />
  </PerfilLayout>
);

export default Igor;
