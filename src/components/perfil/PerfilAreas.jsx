import { Link } from "react-router-dom";

/* Lista de áreas como navegação, não como recorte de especialidade: os dois
   sócios atendem todas as frentes do escritório, então enumerar um subconjunto
   diria algo falso. Cada linha leva à página da área, no mesmo registro de fio
   fino das credenciais — a seta é a única marca de que a linha é clicável. */
const PerfilAreas = ({ items }) => (
  <ul className="perfil-areas">
    {items.map((item) => (
      <li key={item.title}>
        <Link className="perfil-area" to={item.link}>
          <span className="perfil-area__title">{item.title}</span>
          <span className="perfil-area__text">{item.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default PerfilAreas;
