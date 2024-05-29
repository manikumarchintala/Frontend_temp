//useSatate()=re-Renders the component when the state value changes
//useRef()="use Refernce" Does not cause re-renders when its value changes
//when you want a component to remember some information,
//but you dont want that information to trigger new renders
//1)accesing/intacting with Dom elememts
//2)handling focus,animations and transitions
//3)managing timers and intrevals
import React,{useState,useEffect,useRef} from "react"; 
function MyComponent(){
    const inputref1=useRef(null);
    const inputref2=useRef(null);
    const inputref3=useRef(null);
    useEffect(()=>{
        console.log("component rendered")
    })

    function handleClick1(){
        inputref1.current.focus();
        inputref1.current.style.backgroundColor="yellow";
        inputref2.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="";
       }

    function handleClick2(){
        inputref2.current.focus();
        inputref2.current.style.backgroundColor="yellow";
        inputref1.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="";
       }

    function handleClick3(){
        inputref3.current.focus();
        inputref3.current.style.backgroundColor="yellow";
        inputref1.current.style.backgroundColor="";
        inputref2.current.style.backgroundColor="";
       }
return(<div>
<button onClick={handleClick1}>ClickMe!</button>
<br></br>
<input ref={inputref1}/>
<br></br>
<button onClick={handleClick2}>ClickMe!</button>
<br></br>
<input ref={inputref2}/>
<br></br>
<button onClick={handleClick3}>ClickMe!</button>
<br></br>
<input ref={inputref3}/>
       </div>)
}
export default MyComponent;