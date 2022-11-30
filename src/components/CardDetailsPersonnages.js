const CardDetailsPersonnages = ({id}) => {

  return (
    <li className="card-details">
        <div className="infos">
          <h2>Sexe : {id.gender}</h2>
          <h2>Date de naissance : {id.birth_year}</h2>
          <h2>Taille : {id.height} cm</h2>
          <h2>Poids : {id.mass} kg</h2>
          <h2>Couleur de cheveux : {id.hair_color}</h2>
          <h2>Couleur de peau : {id.skin_color}</h2>
          <h2>Couleur des yeux : {id.eye_color}</h2>
        </div>
    </li>
  );
};

export default CardDetailsPersonnages;
