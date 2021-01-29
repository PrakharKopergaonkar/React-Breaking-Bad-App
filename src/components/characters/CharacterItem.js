import React from 'react';

//Functional Component that builds individual grid of a character
const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt=''/>
                </div>
                <div className="card-back">
                    <h1> {item.name} </h1>
                    <ul>
                        <li> 
                            <strong> Actor name: </strong> {item.portrayed}
                        </li>
                        <li>
                            <strong> Actor nickname</strong> {item.nickname}
                        </li>
                        <li>
                            <strong> Birthday </strong> {item.birthday}
                        </li>
                        <li>
                            <strong> Status </strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterItem;