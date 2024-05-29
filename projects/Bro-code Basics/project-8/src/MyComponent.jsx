import React,{useState} from "react";
function MyComponent(){
let [name,setName]=useState("Guest");
const [age,setAge]=useState(0);
const[isEmployed,setisEmployed]=useState(false);
const UpdateName = () =>{
      setName("SpongeBob")
};
const UpdateAge = () =>{
      setAge(age + 1 )
};
const toggleEmployeeStatus = () =>{
    setisEmployed(!isEmployed)
}
return (<div>
        <p>Name:{name}</p>
        <button onClick={UpdateName}>SetName</button>
        <p>Age:{age}</p>
        <button onClick={UpdateAge}>SetName</button>
        <p>isEmployed:{isEmployed? "Yes":"No"}</p>
        <button onClick={toggleEmployeeStatus}>ToggleStatus</button>
       </div>)
}
export default MyComponent;