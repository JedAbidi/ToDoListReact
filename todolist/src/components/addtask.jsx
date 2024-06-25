import React, { Component } from 'react';
const AddTask = (props) => {
    const addHandler = () => {
            props.onAdd();
    }
    return ( 
        <button  onClick={addHandler} class="btn btn-success">Add New Task</button>
     );
}
 
export default AddTask;