import { NavLink } from "react-router-dom";

const CardPersonnages = ({ personnage }) => {
  const id = personnage.url.substr(29);
  return (
    <li className="card">
      <NavLink to={`/personnages/${id}`}>
        <div className="infos">
          <h2>{personnage.name}</h2>
        </div>
      </NavLink>
    </li>
  );
};

export default CardPersonnages;
