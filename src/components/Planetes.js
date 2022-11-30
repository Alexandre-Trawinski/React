import axios from "axios";
import { useEffect, useState } from "react";
import CardPlanetes from "./CardPlanetes";

const Planetes = () => {
  const [planetes, setPlanetes] = useState([]);
  let [next, setNext] = useState("");
  let [previous, setPrevious] = useState("");

  useEffect(() => {
    fetchApiStarWars("https://swapi.dev/api/planets/?format=json")
  }, []);

  let fetchApiStarWars = (req) => {
    const asyncFunction = async () => {
      try {
        const res = await axios.get(req);
        setPlanetes(res.data.results)
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
      <h1>Les planètes</h1>
      <ul>
        {planetes.map((planete, index) => (
          <CardPlanetes key={index} planete={planete} />
        ))}
      </ul>
      <ul className='pagination'>
      { previous ? <li onClick={() => fetchApiStarWars(previous)}>Précédent</li> : ""}        
        { next ? <li onClick={() => fetchApiStarWars(next)}>Suivant</li> : "" }       
      </ul>
    </div>
  );
};

export default Planetes;
