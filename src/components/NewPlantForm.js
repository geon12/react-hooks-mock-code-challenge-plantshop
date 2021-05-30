import React, { useState } from "react";

function NewPlantForm({onSubmit}) {
  const initialFormData = {name: "", image:"",price: ""}
  const [formData,setFormData] = useState(initialFormData)


  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(formData)
    setFormData(initialFormData)
  }

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value
    if (name === "price") {
      value = parseFloat(value)
    }
    setFormData({...formData, [name] : value})
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
