import { Divider, Input } from 'antd';
import {useState} from 'react'



function AddFoodForm({foods, setFoods}) {
console.log(foods)
    const[form, setForm] = useState(
         {
            name: '',
            calories: 0,
            image: '',
            servings: 0 }
    )
            function HandleChange(e){
                return(
                    setForm({ ...form,  [e.target.name]: e.target.value  })
                )
            }

           function HandleSubmit(e){
            e.preventDefault()
            let novoarray = [...foods, form]
            setFoods(novoarray)
           }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name='name' value={form.name} type="text" onChange={HandleChange} />

      <label>Image</label>
      <Input name='image' value={form.image} type="text" onChange={HandleChange} />

      <label>Calories</label>
      <Input name='calories' value={form.calories} type="number" onChange={HandleChange} />

      <label>Servings</label>
      <Input name='servings' value={form.servings} type="number" onChange={HandleChange} />

      <button onClick={HandleSubmit} type="submit">Create</button>
    </form>
    
  );
  
}

export default AddFoodForm;