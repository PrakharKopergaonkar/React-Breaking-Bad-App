import React, {useState, useEffect} from 'react';
import './App.css'
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

//Main app component
const App = () => {

    //States
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState('')

    //useEffect runs on initial render and when the value of variables specified in dependency array changes.
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
            setItems(result.data);
            setLoading(false);
        }
        fetchItems();
        
    }, [query])
    return (
        <div className="container">
            <Header/>
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
    );
}

export default App;