import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPrincipal from "./components/HeaderPrincipal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Advogados from "./components/Advogados";
import AreasAtuacao from "./components/AreasAtuacao";
import Diferenciais from "./components/Diferenciais";
import ScrollToTop from "./components/ScrollToTop";
import ErroDeRota from "./components/ErroDeRota";
import { Analytics } from "@vercel/analytics/react";

/* A home é a rota de entrada e carrega junto do bundle. As outras dezoito vêm
   por `lazy`: cada uma só desce quando alguém navega até ela, em vez de todas
   pesarem no primeiro carregamento. */

const CHAVE_RECARGA = "ccm:recarga-de-chunk";

/* Envolve cada `import()` de rota com uma recarga de emergência. O caso que
   isso resolve: o navegador guardou um index.html antigo, que aponta para
   nomes de arquivo com hash que o deploy novo não serve mais — o chunk vem 404
   e a rota não monta. Recarregar busca o HTML novo e a rota entra.

   A marca na sessionStorage impede laço de recarga se a causa for outra, e é
   apagada no primeiro carregamento bem-sucedido para que uma falha futura
   ainda tenha direito à sua tentativa. */
const rota = (importar) =>
  lazy(() =>
    importar()
      .then((modulo) => {
        try {
          sessionStorage.removeItem(CHAVE_RECARGA);
        } catch {
          /* Sem sessionStorage não há marca para limpar. */
        }
        return modulo;
      })
      .catch((erro) => {
        let jaTentou = true;
        try {
          jaTentou = sessionStorage.getItem(CHAVE_RECARGA) === "1";
          if (!jaTentou) sessionStorage.setItem(CHAVE_RECARGA, "1");
        } catch {
          /* Janela privada pode barrar a sessionStorage. Sem poder registrar a
             tentativa, não insiste: cai direto na fronteira de erro. */
          jaTentou = true;
        }

        if (jaTentou) throw erro;

        window.location.reload();
        /* Promessa que nunca resolve: segura o Suspense até a recarga assumir a
           página, em vez de piscar a fronteira de erro no caminho. */
        return new Promise(() => {});
      })
  );
const Contato = rota(() => import("./pages/Contato"));
const Larissa = rota(() => import("./pages/Larissa"));
const Igor = rota(() => import("./pages/Igor"));
const SobreNos = rota(() => import("./pages/SobreNos"));
const DirMed = rota(() => import("./pages/DirMed"));
const DirTrab = rota(() => import("./pages/DirTrab"));
const DirCons = rota(() => import("./pages/DirCons"));
const DirOdonto = rota(() => import("./pages/DirOdonto"));
const DirSaude = rota(() => import("./pages/DirSaude"));
const DirLGPD = rota(() => import("./pages/DirLGPD"));
const DirCivil = rota(() => import("./pages/DirCivil"));
const DirEmp = rota(() => import("./pages/DirEmp"));
const AreaSaude = rota(() => import("./pages/AreaSaude"));
const AssPrev = rota(() => import("./pages/AssPreventiva"));
const AreaLgpd = rota(() => import("./pages/AreaLGPD"));
const AreaTecnologia = rota(() => import("./pages/AreaTecnologia"));
const AreaMediacao = rota(() => import("./pages/AreaMediacao"));
const SaudeSuplementar = rota(() => import("./pages/SaudeSuplementar"));

function Home() {
  return (
    <>
      <HeaderPrincipal />
      <Hero />
      <Advogados />
      <AreasAtuacao />
      <Diferenciais />
      <Footer />
    </>
  );
}

/* Reserva a altura de uma tela enquanto o chunk da rota chega. Sem isso o
   rodapé subiria por um instante e a página daria um solavanco ao montar. */
const Carregando = () => <div style={{ minHeight: "100vh" }} aria-hidden="true" />;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErroDeRota>
        <Suspense fallback={<Carregando />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobreNos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/larissa" element={<Larissa />} />
            <Route path="/igor" element={<Igor />} />
            <Route path="/direitoMedico" element={<DirMed />} />
            <Route path="/direitoTrabalhista" element={<DirTrab />} />
            <Route path="/direitoConsumidor" element={<DirCons />} />
            <Route path="/areaSaude" element={<AreaSaude />} />
            <Route path="/assessoriaJuridica" element={<AssPrev />} />
            <Route path="/privacidadeDeDados" element={<AreaLgpd />} />
            <Route path="/areaTecnologiaControle" element={<AreaTecnologia />} />
            <Route path="/direitoOdontologico" element={<DirOdonto />} />
            <Route path="/direitoSaude" element={<DirSaude />} />
            <Route path="/direitoLGPD" element={<DirLGPD />} />
            <Route path="/direitoCivil" element={<DirCivil />} />
            <Route path="/direitoEmpresarial" element={<DirEmp />} />
            <Route path="/areaMediacao" element={<AreaMediacao />} />
            <Route path="/saudeSuplementar" element={<SaudeSuplementar />} />
          </Routes>
        </Suspense>
      </ErroDeRota>
      <Analytics />
    </Router>
  );
}

export default App;
