//useEffect()=>react Hook that tells react to dothis code when
//the component re-renders
//the comppnent mounts
//the state of the value
//uses
//event listeners
//dom maipulation
//subscriptions(real-time updates)
//fetching data from api
//cleanup when a components unmounts
import React,{useState,useEffect} from "react";
function MyComponent(){
    const[Height,setHeight]=useState(window.innerHeight);
    const[Width,setWidth]=useState(window.innerWidth);
//window.addEventlistener("resize",handleresize);
//console.log("event listener added")
//this works but the addeventlistener gets executed more than 1000 times
//useeffects come to play
useEffect(() => { 
    window.addEventListener("resize",Handleresize);
    console.log('event listener added');
    return ()=>{
    window.removeEventListener("resize",Handleresize);
    console.log('event listener removed')
    }
},[]);
useEffect(()=>{
    document.title=`size:${Width}x${Height}`
},[Width,Height])

    function Handleresize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
return(<>
<p>Window Width:{Width} px</p>
<p>Window Height:{Height} px</p>
</>)
};
export default MyComponent;