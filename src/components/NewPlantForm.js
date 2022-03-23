import React, {useState} from "react";
import PlantList from "./PlantList";

function NewPlantForm({plantForm, setPlantForm, setPlants, plants}) {
  const [nameInput, setNameInput] = useState('')
  const [imageInput, setImageInput] = useState('')
  const [priceInput, setPriceInput] = useState('')

  const {image, name, price } = plantForm

  function handleNameInput(e){
    setNameInput(e.target.value)
  }

  function handleImageInput(e){
    setImageInput(e.target.value)
  }

  function handlePriceInput(e){
    setPriceInput(e.target.value)
  }

console.log(plantForm)
  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      name: nameInput,
      image: imageInput,
      price: priceInput
    }
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(newItem => setPlants([...plants, newItem]))
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameInput} value={nameInput}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageInput} value={imageInput} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceInput} value={priceInput}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
