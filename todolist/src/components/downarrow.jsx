import React, { Component } from 'react';
const DownArrow = ({index, onDown }) => {
    const downHandler =  () => {
        onDown(index);
            }

    return ( 
        <>
        <button onClick={downHandler} class="btn btn-light"><i class="bi bi-arrow-down"></i> </button>
        </>
     );
}
 
export default DownArrow;