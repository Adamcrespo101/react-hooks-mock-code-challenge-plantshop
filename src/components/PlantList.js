import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantCard, plants, filteredPlants, search}) {
  const makePlants = filteredPlants.map(plant => {
  return  <PlantCard key={plant.id} name={plant.name} image={plant.image} id={plant.id} price={plant.price}/>
  })
  
  return (
    <ul className="cards">
      {makePlants}
    </ul>
  );
}

export default PlantList;
