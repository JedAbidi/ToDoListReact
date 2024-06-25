import React from 'react';
const Delete = ({ index, onDelete }) => {
    const deleteHandler = () => {
        onDelete(index); // CallBacks and user interaction
    };

    return ( 
        <button onClick={deleteHandler} className="btn btn-danger btn-sm ml-2">Delete</button>
    );
}

export default Delete;