import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPrincipal from "./components/HeaderPrincipal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Advogados from "./components/Advogados";
import AreasAtuacao from "./components/AreasAtuacao";
import Diferenciais from "./components/Diferenciais";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

/* A home é a rota de entrada e carrega junto do bundle. As outras dezesseis
   vêm por `lazy`: cada uma só desce quando alguém navega até ela, em vez de
   todas pesarem no primeiro carregamento. */
const Contato = lazy(() => import("./pages/Contato"));
const Larissa = lazy(() => import("./pages/Larissa"));
const Igor = lazy(() => import("./pages/Igor"));
const SobreNos = lazy(() => import("./pages/SobreNos"));
const DirMed = lazy(() => import("./pages/DirMed"));
const DirTrab = lazy(() => import("./pages/DirTrab"));
const DirCons = lazy(() => import("./pages/DirCons"));
const DirOdonto = lazy(() => import("./pages/DirOdonto"));
const DirSaude = lazy(() => import("./pages/DirSaude"));
const DirLGPD = lazy(() => import("./pages/DirLGPD"));
const DirCivil = lazy(() => import("./pages/DirCivil"));
const DirEmp = lazy(() => import("./pages/DirEmp"));
const AreaSaude = lazy(() => import("./pages/AreaSaude"));
const AssPrev = lazy(() => import("./pages/AssPreventiva"));
const AreaLgpd = lazy(() => import("./pages/AreaLGPD"));
const AreaTecnologia = lazy(() => import("./pages/AreaTecnologia"));
const AreaMediacao = lazy(() => import("./pages/AreaMediacao"));
const SaudeSuplementar = lazy(() => import("./pages/SaudeSuplementar"));

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
      <Analytics />
    </Router>
  );
}

export default App;
