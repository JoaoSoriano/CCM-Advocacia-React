import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../img/Carrazzoni Campelo e Medeiros Horizontal_2.jpg";
import { useState, useEffect } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuListActive, setMenuListActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuList = document.querySelector(".menu-list");
      const mobileMenu = document.querySelector(".mobile-menu");
      if (
        menuList &&
        !menuList.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        setMenuListActive(false);
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuListActive(!menuListActive);
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false); // Fecha o menu ao clicar no link
    setMenuListActive(false); // Remove a classe 'active' da lista de menu
  };

  const animateLinks = (open) => {
    const navLinks = document.querySelectorAll(".menu-list li");
    navLinks.forEach((link, index) => {
      if (open) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      } else {
        link.style.animation = "none"; // Reset animation on close
      }
    });
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => animateLinks(true), 10); // Apply animation on open
    } else {
      animateLinks(false); // Remove animation on close
    }
  }, [isActive]);

  return (
    <header className="header">
      <nav>
        {/* Logo */}
        <div className="header-logo">
          <img src={logo} alt="Logo do Escritório" />
        </div>

        <div className="mobile-menu-container">
          {/* Menu Hamburguer */}
          <div
            className={`mobile-menu ${isActive ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          {/* Navegação e Botão de Contato no Submenu */}
          <div className="header-navigation">
            <ul className={`menu-list ${menuListActive ? "active" : ""}`}>
              <li>
                <Link to="/sobrenos" onClick={handleLinkClick}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="#advogados" onClick={handleLinkClick}>
                  Advogados
                </a>
              </li>
              <li>
                <a href="#areas-atuacao" onClick={handleLinkClick}>
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#diferenciais" onClick={handleLinkClick}>
                  Diferenciais
                </a>
              </li>
              <li className="mobile-only">
                <Link to="/contato" onClick={handleLinkClick}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Botão de Contato */}
          <div>
            <div className="header-contact">
              <Link
                className="contact-button"
                to="/contato"
                style={{ display: isActive ? "none" : "inline-flex" }}
              >
                <span className="contact-text">
                  Contato ⇁
                  <i className="icon-next"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
