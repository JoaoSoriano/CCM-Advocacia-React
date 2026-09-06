import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { WHATSAPP_URL } from "../components/area/contact";
import HeaderSimples from "../components/HeaderSimples";
import Footer from "../components/Footer";
import "../styles/contato.css";
import "../styles/form.css";
import "../styles/footer.css";
import email from "../img/email .png";
import phone from "../img/phone.svg";
import address from "../img/maps-and-flags (1).png";

/* Credenciais do EmailJS. A chave pública é feita para ficar exposta no
   cliente — é ela que identifica a conta no navegador. */
const SERVICE_ID = "service_jdh4tlx";
const TEMPLATE_ID = "template_n8vitb5";
const PUBLIC_KEY = "VfZHrEohvKZLPH_7V";

const EMAIL_ESCRITORIO = "carrazzonicampelo@gmail.com";

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
    <>
      <HeaderSimples />

      <section className="contact-section">
        <div className="left-side">
          <div className="entre-em-contato">
            <h2>Contato</h2>
            <p>Entre em contato com a gente para agendar uma consulta ou esclarecer dúvidas.</p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-container">
                <img src={email} alt="Ícone Email" loading="lazy" decoding="async" />
              </div>
              <div>
                <strong>Email:</strong>
                <p className="dados-contato">carrazzonicampelo@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <img src={phone} alt="Ícone Telefone" loading="lazy" decoding="async" />
              </div>
              <div>
                <strong>Telefone:</strong>
                <p className="dados-contato">+55 (81) 99115-8530</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <img src={address} alt="Ícone Endereço" loading="lazy" decoding="async" />
              </div>
              <div>
                <strong>Endereço:</strong>
                <p className="dados-contato">
                  Empresarial Selecta Center, sala 404 - Rua Estado de Israel, nº 262, Ilha do Leite - Recife/PE, 50070-420
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.737490775284!2d-34.89963024636929!3d-8.06381819196388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c55b56390f%3A0x76445ff5e4700008!2sSelecta%20Center!5e0!3m2!1spt-BR!2sbr!4v1729473561988!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <div className="form-container">
        <h1>Fale Conosco</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="form-button"
              disabled={envio.estado === "enviando"}
            >
              <span className="button-text">
                {envio.estado === "enviando" ? "Enviando…" : "Enviar"}
              </span>
            </button>
          </div>

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
      </div>

      <Footer />
    </>
  );
};

export default Contato;
