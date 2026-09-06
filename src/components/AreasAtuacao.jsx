import "../styles/areasAtuacao.css";
import { Link } from "react-router-dom";

const AreasAtuacao = () => {
    const areas = [
        { icon: "fa-solid fa-stethoscope", title: "Direito Médico", text: "Suporte jurídico completo ao profissional e à instituição de saúde, da assessoria preventiva à defesa em processos ético-profissionais, judiciais e administrativos, incluindo as demandas da residência médica.", link: "/direitoMedico" },
        { icon: "fa-solid fa-tooth", title: "Direito Odontológico", text: "Segurança jurídica para clínicas e consultórios: licenças e normas da ANVISA e do CFO, contratos e termos de consentimento, defesa ética e ações de responsabilidade civil.", link: "/direitoOdontologico" },
        { icon: "fa fa-heartbeat", title: "Direito à Saúde", text: "Defesa do direito à saúde na saúde suplementar e no SUS, em negativas de procedimento, medicamentos de alto custo, reajustes abusivos, cancelamentos indevidos e reembolsos negados.", link: "/direitoSaude" },
        { icon: "fa-solid fa-file-shield", title: "Integridade, Compliance e Adequação à LGPD", text: "Assessoria preventiva para empresas de saúde: diagnóstico de conformidade, políticas internas, treinamento das equipes, gestão de riscos e monitoramento contínuo da adequação à LGPD.", link: "/direitoLGPD" },
        { icon: "fa-solid fa-briefcase", title: "Direito Trabalhista", text: "Conformidade e defesa nas relações de trabalho da empresa: consultoria em CLT e acordos coletivos, políticas internas, auditorias trabalhistas e representação em processos judiciais e administrativos.", link: "/direitoTrabalhista" },
        { icon: "fa-solid fa-shopping-cart", title: "Direito do Consumidor", text: "Proteção das relações de consumo e comerciais da empresa: contratos, políticas de troca e termos de uso, publicidade e práticas comerciais, defesa em processos administrativos e judiciais.", link: "/direitoConsumidor" },
        { icon: "fa-solid fa-scale-balanced", title: "Direito Civil e Negocial", text: "Soluções jurídicas estratégicas na prevenção de conflitos, gestão de contratos e proteção patrimonial, aliando consultoria técnica a uma defesa firme e combativa no contencioso cível.", link: "/direitoCivil" },
        { icon: "fa-solid fa-building", title: "Direito Empresarial e Societário", text: "No dinâmico cenário corporativo, uma atuação jurídica preventiva, estratégica e defensiva é fundamental para mitigar riscos, otimizar processos e garantir a sustentabilidade e expansão do seu negócio.", link: "/direitoEmpresarial" }
    ];

    return (
        <section className="areas-atuacao-section">
            <div className="areas-atuacao" id="areas-atuacao">
                <div className="service-wrapper">
                    <div className="service">
                        <h1 className="h2site">Áreas de Atuação</h1>
                    </div>
                    <div className="cards">
                        {areas.map((area, index) => (
                            <div className="card" key={index}>
                                <i className={area.icon}></i>
                                <h2 className="service-h2">{area.title}</h2>
                                <p className="service-p">{area.text}</p>
                                {area.link ? (
                                    <Link className="saiba-mais" to={area.link}>Saiba Mais</Link>
                                ) : (
                                    <button className="saiba-mais">Saiba Mais</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreasAtuacao;
