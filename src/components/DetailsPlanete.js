import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetailsPlanetes from "./CardDetailsPlanets";

const DetailsPlanete = () => {
    const [detailsPlanete, setDetailsPlanete] = useState();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
        axios
            .get(`https://swapi.dev/api/planets/${id}/?format=json`)
            .then((res) => {
                setDetailsPlanete(res.data)
            });
        }
    },[id]);

    return (
        <div className="personnages">
            <h1>Détails</h1>
            <ul>
                {detailsPlanete &&
                <CardDetailsPlanetes id={detailsPlanete} />
                }
                
            </ul>
        </div>
    );
};

export default DetailsPlanete;
