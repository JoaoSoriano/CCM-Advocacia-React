import HeaderSimples from "../HeaderSimples";
import Footer from "../Footer";
import "../../styles/area.css";

/* Casca comum das páginas de área. O `tone` pinta o fundo da página inteira e
   é o recurso mais barato para dar identidade própria a cada área sem sair da
   paleta: os filhos herdam o contraste por variável. */
const AreaLayout = ({ tone = "light", children }) => (
  <>
    <HeaderSimples />
    <main className={`area area--${tone}`}>{children}</main>
    <Footer />
  </>
);

export default AreaLayout;
