import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    plants.map( plant => (
      <ul className="cards"><PlantCard plant={plant} key={plant.id}/></ul>
    ))
    
  );
}

export default PlantList;
