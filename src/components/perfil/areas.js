/* As oito áreas de atuação do site, na ordem da home. Vive fora das páginas
   porque os dois sócios atendem todas elas: a lista precisa ser idêntica nos
   dois perfis e num lugar só, senão elas divergem na próxima área nova.

   Os textos são descritores curtos, não a chamada de marketing de
   AreasAtuacao.jsx — aqui a lista é navegação dentro de um perfil, e a página
   de destino é que faz a venda. Os `link` são os mesmos das rotas de App.jsx. */
export const AREAS = [
  {
    title: "Direito Médico",
    text: "Suporte jurídico completo ao profissional de saúde, em todas as esferas.",
    link: "/direitoMedico"
  },
  {
    title: "Direito Odontológico",
    text: "As questões jurídicas próprias da prática odontológica, de clínicas a consultórios.",
    link: "/direitoOdontologico"
  },
  {
    title: "Direito à Saúde",
    text: "De negativas de procedimento ao acesso a medicamentos de alto custo.",
    link: "/direitoSaude"
  },
  {
    title: "Integridade, Compliance e Adequação à LGPD",
    text: "Assessoria preventiva para empresas de saúde, da adequação à manutenção.",
    link: "/direitoLGPD"
  },
  {
    title: "Direito Trabalhista",
    text: "Conformidade e mitigação de risco nas relações de trabalho da empresa.",
    link: "/direitoTrabalhista"
  },
  {
    title: "Direito do Consumidor",
    text: "Relações de consumo e comerciais da empresa, do risco ao contencioso.",
    link: "/direitoConsumidor"
  },
  {
    title: "Direito Civil e Negocial",
    text: "Contratos, responsabilidade civil, posse e recuperação de créditos.",
    link: "/direitoCivil"
  },
  {
    title: "Direito Empresarial e Societário",
    text: "Governança, contratos comerciais e defesa da empresa em juízo.",
    link: "/direitoEmpresarial"
  }
];
