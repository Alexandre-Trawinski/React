import React from "react";
import { useSelector } from "react-redux";
import CardPersonnages from "./CardPersonnages";

const FavList = () => {
  const favoris = useSelector((state) => state.PersonnageFavoris);

  if (favoris.length === 0) {
    return (
      <div>
        <h1>Aucun favoris ajouté</h1>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h1>Liste des favoris</h1>
        </div>
        <div className="listeFavoris">
          <ul>
            {favoris.map((personnage, index) => (
              <CardPersonnages
                key={index}
                personnage={personnage}
                isFavoris={personnage.isFavoris}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default FavList;
