import "../styles/areasAtuacao.css";

const AreasAtuacao = () => {
    const areas = [
        { icon: "fa-solid fa-stethoscope", title: "Direito Médico", text: "Nosso escritório se destaca pela atuação abrangente e especializada no Direito Médico, oferecendo suporte...", link: "/direitoMedico" },
        { icon: "fa-solid fa-tooth", title: "Direito Odontológico", text: "O direito odontológico, é o ramo dedicado a navegar pelas complexidades jurídicas inerentes à prática odontológica...", link: "/direitoOdontologico" },
        { icon: "fa fa-heartbeat", title: "Direito à Saúde", text: "Nosso escritório se distingue por sua atuação especializada e estratégica na complexa seara do Direito à Saúde, abrangendo...", link: "/direitoSaude" },
        { icon: "fa-solid fa-file-shield", title: "Integridade, Compliance e Adequação à LGPD", text: "O escritório especializado em assessoria jurídica preventiva para empresas de saúde, uni...", link: "/direitoLGPD" },
        { icon: "fa-solid fa-briefcase", title: "Direito Trabalhista", text: "No complexo ambiente empresarial, a legislação trabalhista desempenha um papel fundamental, moldando as relações...", link: "/direitoTrabalhista" },
        { icon: "fa-solid fa-shopping-cart", title: "Direito do Consumidor", text: "No dinâmico ambiente de negócios atual, a legislação consumerista exerce um papel crucial na proteção dos...", link: "/direitoConsumidor" }
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
                                    <a className="saiba-mais" href={area.link}>Saiba Mais</a>
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
