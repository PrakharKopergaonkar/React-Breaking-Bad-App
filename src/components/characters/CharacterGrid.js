import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

//Function component that builds the whole grid that contains characters
const CharacterGrid = ({items, isLoading}) => {

    return isLoading ? <Spinner/> : <section className="cards">
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}/>
        ))}
    </section>
}

export default CharacterGrid;