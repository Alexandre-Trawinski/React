import { NavLink } from "react-router-dom";
import Star_Wars_Logo from "./Star_Wars_Logo.png";

const Accueil = () => {
  return (
    <div className="accueil">
      <h1>Accueil</h1>
      <img src={Star_Wars_Logo} alt="Star_Wars_Logo" />
      <li className="card-accueil">
        <NavLink to="/personnages">
          <div className="infos">
            <h2>Personnages</h2>
          </div>
        </NavLink>
      </li>
      <div className="footer">
        <p>Ce site utilise l'API SWAPI Star Wars.</p>
      </div>
    </div>
  );
};

export default Accueil;
