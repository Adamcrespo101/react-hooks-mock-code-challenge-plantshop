import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, plantForm, setPlantForm, setPlants, search, setSearch, filteredPlants}) {
  return (
    <main>
      <NewPlantForm plantForm={plantForm} setPlantForm={setPlantForm} setPlants={setPlants} plants={plants} />
      <Search search={search} setSearch={setSearch} plants={plants}/>
      <PlantList plants={plants} search={search} filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
