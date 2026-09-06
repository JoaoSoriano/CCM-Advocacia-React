/* Matriz de identidade: os adjetivos da marca ganham índice e uma linha de
   contexto. As pílulas soltas de PerfilTags diziam a palavra e paravam ali —
   aqui cada traço é afirmado e justificado, no mesmo registro de fio fino das
   credenciais, sem virar card de produto. */
const PerfilTraits = ({ items }) => (
  <ul className="perfil-traits">
    {items.map((item, index) => (
      <li className="perfil-trait" key={item.title}>
        <span className="perfil-trait__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="perfil-trait__title">{item.title}</h3>
        <p className="perfil-trait__text">{item.text}</p>
      </li>
    ))}
  </ul>
);

export default PerfilTraits;
