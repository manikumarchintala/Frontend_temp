import React,{useState} from'react';

function Mycomponent(){

 const [foods,setFoods]=useState(["Apple","orange","Banana"]);

 function Handleaddfoods(){

 const newfood = document.getElementById("foodinput").value;
 document.getElementById("foodinput").value = "";

 setFoods(f => [...f,newfood])
 };

 function HandleRemoveFood(index){

  setFoods(foods.filter((_,i) => i !== index))

 };
    return(
    <div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food,index)=><li key={index} onClick={()=>HandleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type='text' id='foodinput' placeholder='foodInput'/>
        <button onClick={Handleaddfoods}>Add Food</button>
    </div>)

};
export default Mycomponent;