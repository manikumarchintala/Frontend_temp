//useEfffect(function,[Dependencies])
//1)UseEffect(()={})//Runs after every re-render
//2)useeffect(()=>{}[])//runs only on mount;
//3)useEffect(()=>{}[value])//runs on mount and when value changes
import { useEffect } from "react";
import React,{useState} from "react";
function MyComponent(){

    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green");
    useEffect(()=>{document.title=`Count: ${count}`},[count,color]);
//by document.title=`Count: ${count} ${color}` this also works but
//by using useeffect keeps code more organized.
//by looking at useeffect we know when the 
function addcount(){
      setCount(c => c + 1)
    };
    function substract(){
        setCount(c=>c-1);
    };
    function ChangeColor(){
        setColor(c => c === "green" ? "red":"green")

    }
  return(<>
         <p style={{color:color}}>Count:{count}</p>
         <button onClick={addcount}>addcount</button>
         <button onClick={substract}>subcount</button>
         <br/>
         <button onClick={ChangeColor}>Chnagecolor</button>
   </>)  

};
export default MyComponent;