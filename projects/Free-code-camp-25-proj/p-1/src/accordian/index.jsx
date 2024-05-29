import { useState } from "react";
import data from "./data";
import "./styles.css"

function Accordian() {
  const [selecetd, setSelected] = useState(null);
  const[enableultipleview,setEnableMultiview]=useState(false);
  const[multiple,setMultiple]=useState([]);
  function handlesingleSelection(getCurrentId) {
    setSelected(getCurrentId === selecetd ? null: getCurrentId);
  }
  function handlemultiselections(getCurrentId){
 let cpymultiple=[...multiple]
 let findIndexofCurrentId = cpymultiple.indexOf(getCurrentId)
 if(findIndexofCurrentId===-1) cpymultiple.push(getCurrentId)
 else cpymultiple.splice(findIndexofCurrentId)
setMultiple(cpymultiple);
  }
console.log(selecetd,multiple)
  return (
 <div className="wrapper">
    <button onClick={()=>setEnableMultiview(!enableultipleview)}>EnableMultipleview</button>
 {
    data && data.length > 0 ?
    data.map(dataitems=>(<div>
        <span>{dataitems.id}</span>
        <div onClick={ enableultipleview ? ()=>handlemultiselections(dataitems.id):()=>handlesingleSelection(dataitems.id)}>{dataitems.question}</div>
                <span>+</span>
                {selecetd===dataitems.id || multiple.indexOf(dataitems.id)!==-1?(<div>{dataitems.answer}</div>):null}
    </div>))
    : <div>No Data Found</div>
 }
 </div>
  );
}
export default Accordian;
