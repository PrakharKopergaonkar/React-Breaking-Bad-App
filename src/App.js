import React, {useState, useEffect} from 'react';
import './App.css'
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters`)
            setItems(result.data);
            setLoading(false);
        }
        fetchItems();
        
    }, [])
    return (
        <div className="container">
            <Header/>
            <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
    );
}

export default App;