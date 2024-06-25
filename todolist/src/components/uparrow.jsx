import React, { Component } from 'react';
const UpArrow = ({index, onUp }) => {
    const upHandler =  () => {
      
        onUp(index);
            }
    return ( 
        <>
        <button onClick={upHandler} class="btn btn-light"><i class="bi bi-arrow-up"></i> </button>
        </>
     );
}
 
export default UpArrow;



