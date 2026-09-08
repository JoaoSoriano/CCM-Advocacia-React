import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PerfilLayout from "../components/perfil/PerfilLayout";
import PerfilSection from "../components/perfil/PerfilSection";
import { WHATSAPP_URL } from "../components/area/contact";
import "../styles/contato.css";
import "../styles/form.css";

/* Credenciais do EmailJS. A chave pública é feita para ficar exposta no
   cliente — é ela que identifica a conta no navegador. */
const SERVICE_ID = "service_th1wjjp";
const TEMPLATE_ID = "template_mp62gib";
const PUBLIC_KEY = "VfZHrEohvKZLPH_7V";

const EMAIL_ESCRITORIO = "carrazzonicampelo@gmail.com";
const TELEFONE = "+55 (81) 99115-8530";
const TELEFONE_TEL = "+5581991158530";
const ENDERECO =
  "Empresarial Selecta Center, sala 404 — Rua Estado de Israel, nº 262, Ilha do Leite, Recife/PE, 50070-420";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Selecta+Center+Rua+Estado+de+Israel+262+Recife";
const MAPA_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.737490775284!2d-34.89963024636929!3d-8.06381819196388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c55b56390f%3A0x76445ff5e4700008!2sSelecta%20Center!5e0!3m2!1spt-BR!2sbr!4v1729473561988!5m2!1spt-BR!2sbr";

/* Um canal por linha, com a ação que ele abre. Telefone não entra como linha
   própria: é o mesmo número do WhatsApp, e repetido pareceria erro — a ligação
   fica como botão no topo, onde a ação é a mesma mas o gesto é outro. */
const canais = [
  {
    label: "WhatsApp",
    valor: TELEFONE,
    href: WHATSAPP_URL,
    externo: true
  },
  {
    label: "E-mail",
    valor: EMAIL_ESCRITORIO,
    href: `mailto:${EMAIL_ESCRITORIO}`
  },
  {
    label: "Endereço",
    valor: ENDERECO,
    href: MAPS_URL,
    externo: true
  }
];

const campos = [
  { id: "name", label: "Nome", type: "text", autoComplete: "name" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { id: "subject", label: "Assunto", type: "text", autoComplete: "off" }
];

const Contato = () => {
  const form = useRef();
  const [envio, setEnvio] = useState({ estado: "ocioso", texto: "", mailto: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (envio.estado === "enviando") return;

    setEnvio({ estado: "enviando", texto: "Enviando…", mailto: "" });

    const dados = new FormData(form.current);
    const nome = (dados.get("name") || "").trim();
    const remetente = (dados.get("email") || "").trim();
    const assunto = (dados.get("subject") || "").trim();
    const mensagem = (dados.get("message") || "").trim();

    /* Antes isto era `sendForm`, que envia os campos com o nome literal do
       input: name, email, subject, message. Os templates do EmailJS, quando
       criados a partir dos modelos prontos, esperam {{from_name}},
       {{from_email}} e {{reply_to}} — nomes que o formulário nunca mandava, e
       que chegavam vazios no template. Mandar os dois conjuntos remove essa
       dependência de como o template foi montado. */
    const params = {
      name: nome,
      from_name: nome,
      user_name: nome,
      email: remetente,
      from_email: remetente,
      user_email: remetente,
      reply_to: remetente,
      subject: assunto,
      title: assunto,
      message: mensagem
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY
      });
      form.current.reset();
      setEnvio({
        estado: "ok",
        texto: "Mensagem enviada. Retornaremos em breve.",
        mailto: ""
      });
    } catch (erro) {
      /* O EmailJS rejeita com um EmailJSResponseStatus, onde o que importa são
         `status` e `text`. O código anterior fazia
         `alert("Erro ao enviar email: ", erro)` — `alert` recebe UM argumento e
         descarta o segundo em silêncio, então a mensagem exibida era sempre o
         prefixo vazio e o motivo real nunca chegava a ninguém. */
      const status = erro?.status ?? "sem código";
      const detalhe = erro?.text || erro?.message || "erro desconhecido";
      console.error(`EmailJS falhou — status ${status}: ${detalhe}`, erro);

      /* Rede de segurança: o EmailJS depende de um token OAuth do Gmail que
         expira de tempos em tempos (é o erro 412). Quando cai, a mensagem que a
         pessoa acabou de escrever se perderia. O `mailto` devolve o texto para
         ela já montado no próprio cliente de e-mail, então a mensagem chega ao
         escritório mesmo com o serviço fora do ar. O formulário também não é
         limpo no erro, para nada ser digitado duas vezes. */
      const corpo = `Nome: ${nome}\nE-mail: ${remetente}\n\n${mensagem}`;
      const mailto =
        `mailto:${EMAIL_ESCRITORIO}` +
        `?subject=${encodeURIComponent(assunto || "Contato pelo site")}` +
        `&body=${encodeURIComponent(corpo)}`;

      setEnvio({
        estado: "erro",
        texto: `Não foi possível enviar agora (código ${status}). Sua mensagem não se perdeu — abra no seu e-mail ou fale pelo WhatsApp.`,
        mailto
      });
    }
  };

  return (
    <PerfilLayout>
      <section className="contato-hero">
        <div className="contato-hero__inner">
          <div className="contato-hero__copy">
            <p className="perfil-eyebrow">Contato</p>
            <h1 className="contato-hero__title">
              Vamos conversar sobre o seu caso
            </h1>
            <p className="contato-hero__lede">
            Entre em contato com a gente para agendar uma consulta ou esclarecer dúvidas.
            </p>
            <div className="contato-hero__actions">
              <a
                className="perfil-btn perfil-btn--solid"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
              </a>
              <a
                className="perfil-btn perfil-btn--ghost"
                href={`tel:${TELEFONE_TEL}`}
              >
                Ligar agora
              </a>
            </div>
          </div>

          {/* Símbolo da marca como peso gráfico do lado direito, onde a coluna
              de texto deixa vazio. Decorativo: `aria-hidden` para leitor de tela
              não anunciar nada, já que a logo do header já identifica o
              escritório. */}
          <span className="contato-hero__marca" aria-hidden="true" />
        </div>
      </section>

      <PerfilSection
        eyebrow="Canais diretos"
        title="Como nos encontrar"
        intro="Escolha o canal que preferir para falar conosco, enviar uma mensagem ou nos fazer uma visita."
        tone="plain"
      >
        <ul className="contato-canais">
          {canais.map((canal) => (
            <li key={canal.label}>
              <a
                className="contato-canal"
                href={canal.href}
                {...(canal.externo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contato-canal__label">{canal.label}</span>
                <span className="contato-canal__valor">{canal.valor}</span>
              </a>
            </li>
          ))}
        </ul>
      </PerfilSection>
      <section className="contato-mapa">
        <iframe
          src={MAPA_EMBED}
          title="Localização do escritório no Empresarial Selecta Center, Ilha do Leite, Recife"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <PerfilSection
        eyebrow="Mensagem"
        title="Escreva para o escritório"
        intro="Descreva brevemente a sua situação para oferecermos uma resposta rápida e alinhada ao seu caso."
        tone="subtle"
      >
        <form ref={form} onSubmit={sendEmail} className="form-container">
          {campos.map((campo) => (
            <div className="form-group" key={campo.id}>
              <label htmlFor={campo.id}>{campo.label}</label>
              <input
                type={campo.type}
                id={campo.id}
                name={campo.id}
                autoComplete={campo.autoComplete}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button
            type="submit"
            className="form-button"
            disabled={envio.estado === "enviando"}
          >
            <span className="button-text">
              {envio.estado === "enviando" ? "Enviando…" : "Enviar"}
            </span>
          </button>

          {/* `role="status"` com `aria-live` anuncia o resultado a leitor de
              tela — o `alert()` anterior fazia isso por acidente, ao roubar o
              foco. */}
          {envio.texto && (
            <div className={`form-status form-status--${envio.estado}`} role="status">
              <p>{envio.texto}</p>
              {envio.mailto && (
                <div className="form-status__acoes">
                  <a className="form-status__link" href={envio.mailto}>
                    Abrir no meu e-mail
                  </a>
                  <a
                    className="form-status__link"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
              )}
            </div>
          )}
        </form>
      </PerfilSection>

      {/* Faixa sangrada de ponta a ponta: fecha a página com a localização sem
          precisar de mais um título. O endereço já foi dado acima como linha
          clicável, então aqui o mapa é ilustração, não navegação. */}
    </PerfilLayout>
  );
};

export default Contato;
