import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ search, setSearch] = useState("")
  const [ allPlants, setAllPlants ] = useState([])

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }
  // initial get request retrieves data from API
  useEffect( () => {
    fetch("http://localhost:6001/plants")
    .then( r => r.json())
    .then( plantData => {
      setAllPlants(plantData)
    })
  },[]);
  // create search fucntion that shearches with each character typed in
  const filteredPlants = allPlants.filter(plant => 
    plant.name.toLowerCase().includes(search)
  )
  // main component, pass down state and callback props
  return (
    <main>
      <NewPlantForm allPlants={allPlants} setAllPlants={setAllPlants}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
