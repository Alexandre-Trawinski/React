import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

const DetailsPersonnage = () => {
    const [detailsPersonnage, setDetailsPersonnage] = useState();
    const { id } = useParams();

    useEffect(() => {
        if(id) {
        axios
            .get(`https://swapi.dev/api/people/${id}/?format=json`)
            .then((res) => {
                setDetailsPersonnage(res.data)
            });
        }
    },[id]);

    return (
        <div className="personnages">
            <h1>Détails</h1>
            <ul>
                {detailsPersonnage &&
                <CardDetails id={detailsPersonnage} />
                }
                
            </ul>
        </div>
    );
};

export default DetailsPersonnage;
