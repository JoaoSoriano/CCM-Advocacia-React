import React from 'react';
import '../styles/footer.css';
import logoEscura from '../img/NOVO_ESCURO.jpg';
import instagramIcon from '../img/instagram.svg';
import whatsappIcon from '../img/whatsapp.svg';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="logo-container">
                        <img 
                            src={logoEscura} 
                            alt="Logo Escura" 
                            className="logo-escura"
                        />
                    </div>
                    <div className="footer-info">
                        <p>Empresarial Selecta Center, sala 404 - Rua Estado de Israel, nº 262, Ilha do Leite - Recife/PE, 50070-420</p>
                        <p>Telefone: (81) 99865-6909</p>
                        <div className="icons-footer">
                            <a 
                                href="https://www.instagram.com/ccm_adv?igsh=MWJhcHU4eHB3emlweQ%3D%3D&utm_source=qr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
                            </a>
                            <a 
                                href="https://wa.me/5581998656909" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img src={whatsappIcon} alt="Whatsapp" className="instagram-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
            <p>
                Copyright © Carrazzoni, Campêlo e Medeiros Advocacia - Desenvolvido por: 
                <a className="joao" href="https://www.linkedin.com/in/jo%C3%A3o-rafael-soriano-correia-3106351a1/" target="_blank" rel="noopener noreferrer">
                    João Rafael Soriano
                </a>
            </p>
            </div>
        </>
    );
};

export default Footer;
