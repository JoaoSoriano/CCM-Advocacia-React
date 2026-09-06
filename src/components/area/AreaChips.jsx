/* Enumerações curtas do texto original (aspectos, normas, frentes) que não
   rendem card próprio mas se perderiam dentro de um parágrafo. */
const AreaChips = ({ items }) => (
  <ul className="area-chips">
    {items.map((item) => (
      <li className="area-chip" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default AreaChips;
