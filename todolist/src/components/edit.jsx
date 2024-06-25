import React, { Component } from 'react';
const Edit = ({index,onEdit}) => {
    const editHandler = () => {
        onEdit(index);
    }
    return ( 
        <button onClick={editHandler}><i class="bi bi-pen"></i></button>
     );
}
export default Edit;