import axios from "axios";
import { useEffect, useState } from "react";
import CardPlanetes from "./CardPlanetes";

const Planetes = () => {
  const [planetes, setPlanetes] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/?format=json")
      .then((res) => setPlanetes(res.data.results));
  }, []);

  return (
    <div className="personnages">
      <h1>Les planètes</h1>
      <ul>
        {planetes.map((planete, index) => (
          <CardPlanetes key={index} planete={planete} />
        ))}
      </ul>
    </div>
  );
};

export default Planetes;
