import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonnages from "./CardPersonnages";

const Personnages = () => {

  const [personnages, setPersonnages] = useState([]);
  let [next, setNext] = useState("");
  let [previous, setPrevious] = useState("");

  useEffect(() => {
    fetchApiStarWars("https://swapi.dev/api/people/?format=json")
  }, []);

  let fetchApiStarWars = (req) => {
    const asyncFunction = async () => {
      try {
        const res = await axios.get(req);
        setPersonnages(res.data.results)
        setNext(res.data.next);
        setPrevious(res.data.previous);
      } catch (error) {
        return error;
      }
    }
    asyncFunction();
  }

  

  return (
    <div className="personnages">
      <h1>Les personnages</h1>
      <ul>
        {personnages.map((personnage, index) => (
          <CardPersonnages key={index} personnage={personnage} />
        ))}
      </ul>
      <ul className='pagination'>
      { previous ? <li onClick={() => fetchApiStarWars(previous)}>Précèdent</li> : ""}        
        { next ? <li onClick={() => fetchApiStarWars(next)}>Suivant</li> : "" }       
      </ul>

    </div>
  );
};

export default Personnages;
