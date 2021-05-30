import React, { useState } from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant

  const [soldOut, setSoldOut] = useState(false)
  function handleClick() {
    setSoldOut(!soldOut)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!soldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
