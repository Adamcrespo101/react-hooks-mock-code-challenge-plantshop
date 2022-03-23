import React, {useState} from "react";

function PlantCard({plants, name, price, image, id}) {
const [stock, setStock] =useState(true)

function handleStock (){
  setStock((stock) => !stock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
