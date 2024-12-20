import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  //state for in stock / out of stock button toggle
  const [ stockButton, setStockButton ] = useState(true)
  // handle toggle function
  function handleClick() {
    return(
      setStockButton(!stockButton)
    )
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stockButton ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
