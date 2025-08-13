import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPrincipal from "./components/HeaderPrincipal";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Advogados from "./components/Advogados";
import AreasAtuacao from "./components/AreasAtuacao";
import Diferenciais from "./components/Diferenciais";
import Contato from "./pages/Contato";
import Larissa from "./pages/Larissa";
import Igor from "./pages/Igor";
import DirMed from "./pages/DirMed";
import SobreNos from "./pages/SobreNos";
import DirTrab from "./pages/DirTrab";
import DirCons from "./pages/DirCons";
import AreaSaude from "./pages/AreaSaude";
import AssPrev from "./pages/AssPreventiva";
import AreaLgpd from "./pages/AreaLGPD";
import AreaTecnologia from "./pages/AreaTecnologia";
import DirOdonto from "./pages/DirOdonto";
import DirSaude from "./pages/DirSaude";
import DirLGPD from "./pages/DirLGPD";
import AreaMediacao from "./pages/AreaMediacao";
import SaudeSuplementar from "./pages/SaudeSuplementar";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobreNos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path='/larissa' element={<Larissa />} />
        <Route path='/igor' element={<Igor />} />
        <Route path='/direitoMedico' element={<DirMed />} />
        <Route path='/direitoTrabalhista' element={<DirTrab />} />
        <Route path='/direitoConsumidor' element={<DirCons />} />
        <Route path='/areaSaude' element={<AreaSaude />} />
        <Route path='/assessoriaJuridica' element={<AssPrev />} />
        <Route path='/privacidadeDeDados' element={<AreaLgpd />} />
        <Route path='/areaTecnologiaControle' element={<AreaTecnologia />} />
        <Route path="/direitoOdontologico" element={<DirOdonto />} />
        <Route path="/direitoSaude" element={<DirSaude />} />
        <Route path="/direitoLGPD" element={<DirLGPD />} />
        <Route path="/areaMediacao" element={<AreaMediacao />} />
        <Route path="/saudeSuplementar" element={<SaudeSuplementar />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
