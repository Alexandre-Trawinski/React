import { NavLink } from "react-router-dom";

const CardPlanetes = ({ planete }) => {
  const id = planete.url.substr(30);
  return (
    <li className="card">
      <NavLink to={`/planetes/${id}`}>
        <div className="infos">
          <h2>{planete.name}</h2>
        </div>
      </NavLink>
    </li>
  );
};

export default CardPlanetes;
