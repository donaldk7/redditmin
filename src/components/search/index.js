import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";

const Search = () => {

    const history = useHistory();
    const searchInputRef = useRef();

    const onSearchHandler = (e) => {
        e.preventDefault();

        const searchQuery = new URLSearchParams({
            topic: searchInputRef.current.value
        }).toString();
        history.push('/search/?' + searchQuery);
    }

    //

    return (
        <form onSubmit={onSearchHandler} className='search-from' >
            <label for='search'>Search</label> &nbsp;
            <input type='text' className='search' name='search' ref={searchInputRef} required></input> &nbsp;
            <button type="submit" className="search-button"> 🔎 </button>
        </form>
    )
}

export default Search;