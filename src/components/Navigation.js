import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/personnages"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Personnages</li>
        </NavLink>
        <NavLink
          to="/planetes"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Planètes</li>
        </NavLink>
        <NavLink
          to="/favoris"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Favoris</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
