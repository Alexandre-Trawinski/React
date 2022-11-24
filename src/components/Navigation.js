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
      </ul>
    </div>
  );
};

export default Navigation;
