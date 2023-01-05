import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoris, removeFavoris } from "../store";
import { NavLink, useNavigate } from "react-router-dom";
const CardPersonnages = ({ personnage }) => {
  let [isFavoris, setIsFavoris] = useState(personnage.isFavoris);

  const id = personnage.url.substr(29);
  const dispatch = useDispatch();
  const personnageFavoris = useSelector((state) => state.PersonnageFavoris);

  useEffect(() => {
    let include = personnageFavoris.find(
      (perso) => perso.name === personnage.name
    );
    if (include) {
      setIsFavoris(true);
    }
  });

  let favorisButton = (event) => {
    if (!isFavoris) {
      dispatch(addFavoris({ name: personnage.name, url: personnage.url }));
    } else {
      if (event.target.baseURI.includes("PersonnageFavoris")) {
        dispatch(removeFavoris(personnage.name));
      } else {
        setIsFavoris(false);
        dispatch(removeFavoris(personnage.name));
      }
    }
  };

  return (
    <li className="card">
      <span className="favourite">
        <i
          className={`${isFavoris ? "fas" : "far"} fa-star`}
          onClick={favorisButton}
        ></i>
      </span>
      <NavLink to={`/personnages/${id}`}>
        <div className="infos">
          <h2>{personnage.name}</h2>
        </div>
      </NavLink>
    </li>
  );
};

export default CardPersonnages;
