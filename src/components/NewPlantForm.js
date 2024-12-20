import React, { useEffect, useState } from "react";

function NewPlantForm({ allPlants, setAllPlants}) {
  const [ newName, setNewName ] = useState("")
  const [ newImg, setNewImg ] = useState("")
  const [ newPrice, setNewPrice ] = useState(0)
  //states to retain form data
  //handlers to track data in form
  function nameChangeHandler(event) {
    setNewName(event.target.value)
  }
  function imgChangeHandler(event) {
    setNewImg(event.target.value)
  }
  function priceChangeHandler(event) {
    setNewPrice(event.target.value)
  }
  // on submit, make a POST request. Add new plant data to API and display on page
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {"Content-Type": "Application/JSON"},
      body: JSON.stringify({
        "name": newName,
        "image": newImg,
        "price": newPrice
      }),
    })
    .then( r => r.json())
    .then( newPlantData => {
      setAllPlants([...allPlants, newPlantData])
    })
    .catch(error => console.error(error))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={nameChangeHandler}/>
        <input type="text" name="image" placeholder="Image URL" onChange={imgChangeHandler}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={priceChangeHandler}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
