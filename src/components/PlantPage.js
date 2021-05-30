import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const BASE_URL = 'http://localhost:6001'
  const [plants,setPlants] = useState([])
  useEffect(() => {
    fetch(`${BASE_URL}/plants`)
      .then(resp => resp.json())
      .then(resp => setPlants(resp))
  },[])

  
  
  function onSubmit(data) {

    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) 
    }
    fetch(`${BASE_URL}/plants`,configObj)
      .then(resp => resp.json())
      .then((resp) => {
        setPlants([...plants,resp])
      })
  }

  const [search,setSearch] = useState("")

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
