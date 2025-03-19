import React from "react";
import HeaderSimples from "../components/HeaderSimples";
import Footer from "../components/Footer";
import "../styles/contato.css";
import "../styles/form.css";
import "../styles/footer.css";
import email from "../img/email .png";
import phone from "../img/phone.svg";
import address from "../img/maps-and-flags (1).png";

const Contato = () => {
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
                <img src={email} alt="Ícone Email" />
              </div>
              <div>
                <strong>Email:</strong>
                <p className="dados-contato">carrazzonicampeloemedeiros@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <img src={phone} alt="Ícone Telefone" />
              </div>
              <div>
                <strong>Telefone:</strong>
                <p className="dados-contato">+55 (81) 99865-6909</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <img src={address} alt="Ícone Endereço" />
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
        <form id="contactForm" action="https://formsubmit.co/joaorafael2502@gmail.com" method="POST">
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
            <button type="submit" className="form-button">
              <span className="button-text">Enviar</span>
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contato;
