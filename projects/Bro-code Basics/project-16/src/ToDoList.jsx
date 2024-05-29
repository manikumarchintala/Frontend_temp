import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState(["Eat Breakfast"]);
    const [newTask,setNewTask]=useState("");
    function HandleInputChange(event){
    setNewTask(event.target.value)
    };
    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        }
    };
    function DeleteTask(index){
        const updatedTasks = tasks.filter((_,i)=> i !==index)
        setTasks(updatedTasks);

    };
    function MovetaskUp(index){
        if(index > 0){
            const updatedTasks=[...tasks];
           [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
           setTasks(updatedTasks)
        }

    }
    function MovetaskDown(index){
       if(index < tasks.length -1){
        const updatedTasks=[...tasks];
           [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
           setTasks(updatedTasks)
       }
    }

    return(
    <div className="to-do-list">
        <h1>To-Do-list</h1>
        <div>
        <input type="text" placeholder="Enter A task"
          value={newTask} onChange={HandleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=><li key={index}><span className="text">{task}</span>
            <button className="delete-button" onClick={()=>DeleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=>MovetaskUp(index)}>Up</button>
            <button className="move-button" onClick={()=>MovetaskDown(index)}>Down</button>
            </li>)}
        </ol>
        
    </div>
  )

};
export default ToDoList;