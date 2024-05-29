import React,{useState} from "react";
function ColorPicker(){
    const [Color,setColor]=useState("#FFFFFF")
    function handlecolorchange(event){
     setColor(event.target.value)
    }
return(<div className="color-picker-container">
    <h1>color Picker</h1>
    <div className="color-display" style={{backgroundColor:Color}}>
     <p>Selected color {Color}</p>
    </div>
    <label>Select a color:</label>
    <input type="Color" value={Color} onChange={handlecolorchange}/>
</div>);
};
export default ColorPicker;