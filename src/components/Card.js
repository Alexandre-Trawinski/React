import { NavLink } from "react-router-dom";

const Card = ({ personnage }) => {
  return (
    <li className="card">
      <NavLink to="/personnages/">
        <div className="infos">
          <h2>{personnage.name}</h2>
        </div>
      </NavLink>
    </li>
  );
};

export default Card;
