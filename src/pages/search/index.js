import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { searchReddit } from "../../api/jsonReddit";
import daysAgo from '../../app/dateConverter'

const SearchPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search)
    const topic = queryParams.get('topic')

    const [data, setData] = useState(null);

    useEffect(() => { 
        const getData = async () => {
            const redditData = await searchReddit(topic);
            setData(redditData);            
        }
        
        getData();
    }, [topic])

    if (!data) {
        return <h2>Searching for topic...{topic}</h2>;
    }


    return (
        <div>
            <h2>{topic} posts</h2>        
            {data.data.children.map((article) => (
                <a href={article.data.url} target="_blank">
                    <article>
                        <p></p>
                        <p>r/{article.data.subreddit} </p>
                        <p>created {daysAgo(article.data.created)}</p>
                        <p></p>
                        <p></p>
                        <h3>{article.data.title}</h3>
                        <img src={article.data.thumbnail} />
                    </article>
                </a>
            ))}
        </div>
    )   
}

export default SearchPage;