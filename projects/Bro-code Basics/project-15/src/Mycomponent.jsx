import React from "react";
import { useState } from "react";
function MyComponenet(){
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    function handleremove(index){
        setCars(c=>c.filter((element,i) => i!==index));
    }
    function handlechangeyear(event){
         setCarYear(event.target.value);
        
    };
    function handlechangemake(event){
      setCarMake(event.target.value)
    };
    function handlechangemodel(event){
      setCarModel(event.target.value)
    };
    function handleaddcar(){
        const newcar = {year: carYear,
                       make:carMake,
                       model:carModel }
      setCars(c => [...c,newcar])
      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("")
    }


    return(<div>
        <h2>All cars and their information</h2>
        <ul> {cars.map((car,index) => <li key={index} onClick={()=>handleremove(index)}>{car.year} {car.make} {car.model}</li>)} </ul>
        <input type="number" value={carYear} onChange={handlechangeyear}/><br></br>
        <input type="text" value={carMake} placeholder="make" onChange={handlechangemake} /><br></br>
        <input type="text" value={carModel} placeholder="model" onChange={handlechangemodel}/><br></br>
        <button onClick={handleaddcar}>submit</button>
    </div>)

};
export default MyComponenet;