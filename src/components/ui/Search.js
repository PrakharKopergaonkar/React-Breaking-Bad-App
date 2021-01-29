import React, {useState} from 'react';

function Search({getQuery}) {
    const [Text, setText] = useState('');
    const OnChange = (q) => {
        setText(q);
        getQuery(q);
    }
    return (
        <section className="search"> 
            <form>
                <input 
                type="text" 
                className="form-control"
                placeholder="Search characters"
                value={Text}
                onChange={e => (OnChange(e.target.value))}
                autoFocus
                />
            </form> 
        </section>
    );
}

export default Search;