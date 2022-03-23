import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plants, setPlants] = useState([])
const [plantForm, setPlantForm] = useState({})
const [search, setSearch] = useState('')

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(res => res.json())
  .then(plantData => setPlants(plantData))
}, [])

const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search))

console.log(filteredPlants)
  return (
    <div className="app">
      <Header />
      <PlantPage filteredPlants={filteredPlants} plants={plants} setPlantForm={setPlantForm}
       plantForm={plantForm} setPlants={setPlants}
       search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
