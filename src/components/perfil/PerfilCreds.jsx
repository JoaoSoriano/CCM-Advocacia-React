/* Credenciais em linhas separadas por fio, com período opcional na coluna da
   esquerda. É a peça central destas páginas: um card enquadraria a credencial
   como se fosse um produto, a linha com fio e ano lê-se como currículo. */
const PerfilCreds = ({ items }) => (
  <ul className="perfil-creds">
    {items.map((item) => (
      <li className="perfil-cred" key={item.title}>
        {item.period && (
          <span className="perfil-cred__period">{item.period}</span>
        )}
        <div className="perfil-cred__body">
          <h3 className="perfil-cred__title">{item.title}</h3>
          {item.detail && <p className="perfil-cred__detail">{item.detail}</p>}
        </div>
      </li>
    ))}
  </ul>
);

export default PerfilCreds;
