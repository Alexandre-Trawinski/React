import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Personnages = () => {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?format=json")
      .then((res) => setPersonnages(res.data.results));
  }, []);

  return (
    <div className="personnages">
      <h1>Les personnages</h1>
      <ul>
        {personnages.map((personnage, index) => (
          <Card key={index} personnage={personnage} />
        ))}
      </ul>
    </div>
  );
};

export default Personnages;
