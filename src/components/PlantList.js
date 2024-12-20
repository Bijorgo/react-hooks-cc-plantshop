import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // for each plant in API, create one list item. Pass in props to expand
  return (
    plants.map( plant => (
      <ul className="cards"><PlantCard plant={plant} key={plant.id}/></ul>
    ))
    
  );
}

export default PlantList;
