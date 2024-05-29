import React,{useContext} from "react";
import { UserContext } from "./ComponentA";
function ComponentD(props){
     const user = useContext(UserContext);
    return(<div className="box">
           <h1>ComponentD</h1>
           <h2>{`Bye ${props.user}`}</h2>
           <h3>{`bye ${user}`}</h3>
          </div>)
    };
    export default ComponentD;