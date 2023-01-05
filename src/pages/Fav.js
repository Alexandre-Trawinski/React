import React from "react";
import Navigation from "../components/Navigation";

import { useSelector } from "react-redux";
import FavList from "../components/FavList";

const Favoris = () => {
  const favoris = useSelector((state) => state.PersonnageFavoris);

  return (
    <div>
      <Navigation />
      <FavList />
    </div>
  );
};

export default Favoris;
