import { Link } from "react-router-dom";

/* Ponte do Sobre Nós para as páginas de perfil. Os dados são os mesmos do card
   de sócios na home. */
const PerfilSocios = ({ socios }) => (
  <ul className="perfil-socios">
    {socios.map((socio) => (
      <li key={socio.link}>
        <Link className="perfil-socio" to={socio.link}>
          <span className="perfil-socio__media">
            <img
              src={socio.img}
              alt={socio.nome}
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className="perfil-socio__body">
            <span className="perfil-socio__nome">{socio.nome}</span>
            <span className="perfil-socio__oab">{socio.oab}</span>
            <span className="perfil-socio__cta">Ver perfil</span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export default PerfilSocios;
