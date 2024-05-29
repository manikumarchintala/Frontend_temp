import React,{useState} from "react";
function MyComponent(){
    const [car,setCar]=useState({year:2024,make:'ford',model:'mustang'});
    function handleyearchange (event){
      setCar(c => ({...c,year: event.target.value}))
    };
    function handlemakechange (event){
      setCar(c => ({...c,make: event.target.value}))
    };
    const handlemodelchange = (event)=>{
      setCar({...car,model: event.target.value})
    };


    return(<div>
          <p>your favorate car is : {car.make} {car.model} {car.year}</p>
          <input type="number" value={car.year} onChange={handleyearchange}></input>
          <input type="text" value={car.make} onChange={handlemakechange}></input>
          <input type="text" value={car.model} onChange={handlemodelchange}></input>
           </div>)
};
export default MyComponent;