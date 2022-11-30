const CardDetailsPlanetes = ({id}) => {

    return (
      <li className="card-details">
          <div className="infos">
            <h2>Période de rotation : {id.rotation_period} heures</h2>
            <h2>Période orbitale : {id.orbital_period} jours locaux</h2>
            <h2>Diamètre : {id.diameter} km</h2>
            <h2>Climat : {id.climate}</h2>
            <h2>Gravité : {id.gravity} m/s²</h2>
            <h2>Terrain : {id.terrain}</h2>
            <h2>Surface de l'eau : {id.surface_water} km³</h2>
            <h2>Population : {id.population}</h2>
          </div>
      </li>
    );
  };
  
  export default CardDetailsPlanetes;
  