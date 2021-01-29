import React from 'react';
import spinner from '../../img/spinner.gif'
function Spinner() {
    const Style = {
        width: '200px',
        margin: 'auto',
        display: 'block'
    }
    return (
        <div className="">
            <img src={spinner} alt="" style={Style}/>
        </div>
    );
}

export default Spinner;