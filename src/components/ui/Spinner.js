import React from 'react';
import spinner from '../../img/spinner.gif'

//Functional Spinner component
const Spinner = () => {
    const Style = {
        width: '200px',
        margin: 'auto',
        display: 'block'
    }
    return (
        <img src={spinner} alt="" style={Style}/>
    );
}

export default Spinner;