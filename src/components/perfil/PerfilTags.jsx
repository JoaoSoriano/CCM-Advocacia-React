const PerfilTags = ({ items }) => (
  <ul className="perfil-tags">
    {items.map((item) => (
      <li className="perfil-tag" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default PerfilTags;
