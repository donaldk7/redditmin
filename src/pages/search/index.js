import React from "react";
import { useLocation } from "react-router-dom"


const SearchPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search)
    const topic = queryParams.get('topic')

    return (
        <h2>Search results for {topic}</h2>
    )
}

export default SearchPage;