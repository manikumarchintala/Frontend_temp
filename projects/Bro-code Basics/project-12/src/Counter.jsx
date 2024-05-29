//updaterfunction = a function passed as a argument to setstate() usually
//ex:setyear(arrow function)
//allow for safe updates based on previous state used for multiple state 
//updates and asynchronous functions good practice to use updater functions


import React,{useState} from "react";
function Counter(){
const [count,setCount]=useState(0)
const increment = () => {
    //uses the current state to calculate the next state.
    //set functions do not trigger on update
    //react batches together state updates for performance reasons.
    //next state beocmes the current state after an update
    setCount(c => c+1)
    setCount(count => count+1)
};
const decrement = () => {
    setCount(count-1)
    setCount(c => c-1)
};
const Reset = () => {
    setCount(c => c = 0)
};
return(<>
<div className="counter-container">
    <p className="counter-display">{count}</p>
    <button className="counter-button" onClick={increment}>Increment</button>
    <button className="counter-button" onClick={decrement}>Decrement</button>
    <button className="counter-button" onClick={Reset}>Reset</button>
</div>
</>)

}
export default Counter;