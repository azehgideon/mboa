import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <ul style={{ listStyle: "none", textDecoration: "none" }}>
      <li className="selected">
        <Link to="/">Dableau de bord</Link>
      </li>
      <li>
        <Link to="clients">Utilisateur</Link>
      </li>
      <li>
        <Link to="requests">Gestion de requete</Link>
      </li>
      <li>
        <Link to="teams">
          <i className="fas fa-users"></i>Equipes
        </Link>
      </li>
      <li>
        <Link to="settings">
          <i className="glyphicon glyphicon-cog"></i>Parametres
        </Link>
      </li>
    </ul>
  );
};
export default SideMenu;
