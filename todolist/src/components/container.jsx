import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './addtask';
import Delete from './delete';
import Edit from './edit';
import UpArrow from './uparrow';
import DownArrow from './downarrow';

const tasks1=["task1", "task2", "task3"]
const TasksContainer = () => {
    const [tasks, setTasks] = useState(tasks1); //the state is tasks and setter is setTasks
    // Function to handle deletion of a task
    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1); // Remove 1 element at index
        setTasks(updatedTasks); // Update state with new tasks array
    };
    const handleAdd = () => {
        const newTask = prompt("Enter new task");
        if(newTask){
            setTasks([...tasks, newTask]);
            }
    }
    const handleUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            const c = tasks[index];
            updatedTasks[index] = tasks[index-1];
            updatedTasks[index-1] = c;
            setTasks(updatedTasks);
        }
    }
    const handleDown = (index) => {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            const c = tasks[index];
            updatedTasks[index] = tasks[index+1];
            updatedTasks[index+1] = c;
            setTasks(updatedTasks);
        }
    }
    const handleEdit = (index) => {
        const updatedTasks = [...tasks];
        const newTask = prompt("Enter new task");
        updatedTasks[index]=newTask;
        setTasks(updatedTasks);
    }
    return (
        <div className='container'>
            <h1>Your tasks :</h1>
            <AddTask tasks={tasks} onAdd={handleAdd}/> 
            <br /><br /><br /><br />
            <ul  className="list-group mt-4">
                {tasks.map((task, index) => (
                    <div className='listItem' key={index}>
                        <li className="list-group-item">
                            {task}
                            <Delete tasks={tasks} index={index} onDelete={handleDelete} />
                            <UpArrow tasks={tasks} index={index} onUp={handleUp}/>
                            <DownArrow tasks={tasks} index={index} onDown={handleDown} />
                            <Edit tasks={tasks} index={index} onEdit={handleEdit}/>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TasksContainer;
