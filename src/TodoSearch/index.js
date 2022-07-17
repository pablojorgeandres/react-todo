import React from "react";
import './TodoSearch.css';

function TodoSearch ({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <input 
            className="TodoSearch" 
            placeholder="search ..." 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };