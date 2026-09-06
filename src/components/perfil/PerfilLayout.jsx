import HeaderSimples from "../HeaderSimples";
import Footer from "../Footer";
import "../../styles/perfil.css";

const PerfilLayout = ({ children }) => (
  <>
    <HeaderSimples />
    <main className="perfil">{children}</main>
    <Footer />
  </>
);

export default PerfilLayout;
