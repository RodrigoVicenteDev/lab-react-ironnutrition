import foodsjson from './foods.json';
import { useState } from 'react';
import FoodBox from './components/foodbox/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import { Divider, Input } from 'antd';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsjson)

  
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }
  
  return (
    <div className="App">
      
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search.value} type="text" onChange={handleChange} />

      <h2 style={{textAlign:"center"}}>Food List</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>

      
        
      {foods
      
      .filter((element)=>{ 
        return(
          element.name.toLowerCase().includes(search.toLowerCase()) ||
          element.calories.toString().includes(search.toLowerCase())  
          
        )

      })
      
      .map((element)=>{
        return(
          <FoodBox foods = {foods} setFoods={setFoods} food={ {
            name: element.name,
            calories: element.calories,
            image: element.image,
            servings: element.servings
          }} />
        )
      })}
      </div>

      <AddFoodForm foods={foods}  setFoods = {setFoods}/>

      

    </div>
  );
}

export default App;
