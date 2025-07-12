import React, {useState} from 'react';
function ToDoList(){
    const [tasks, setTasks] =useState(["Brush Teeth", "Eat breakfast"]);
    const [newTask, setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value); 
    }
    function addTask(){
        if(newTask.trim()!=""){
        setTasks([...tasks, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const newTasks=[...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    }
    function moveTaskUp(index){
        if(index>0){
        const newTasks=[...tasks];
        const task=newTasks.splice(index,1);
        newTasks.splice(index-1, 0, task);
        setTasks(newTasks);
        }
    }
    function moveTaskDown(index){
        if (index<tasks.length-1){
        const newTasks=[...tasks];
        const task=newTasks.splice(index,1);
        newTasks.splice(index+1, 0, task);
        setTasks(newTasks);
        }
    }

    return (
        <div className="TodoList">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
                <ol>{tasks.map((task,index)=>
                <li key={index}><span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button>
                <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                </li>)}
                </ol>
            </div>
        </div>
    )

}
export default ToDoList;