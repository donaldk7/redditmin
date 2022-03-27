import React, { useEffect, useState } from "react";
import { popularReddit } from "../../api/jsonReddit";
import daysAgo from '../../app/dateConverter'


// home / landing page lists the most popular, current articles in a list

const HomePage = () => {

    const [data, setData] = useState(null);

    useEffect(() => { 
        const getData = async () => {
            const redditData = await popularReddit();
            setData(redditData);            
        }
        
        getData();
    }, [])

    if (!data) {
        return <h2>Fetching data from Reddit...</h2>;
    }


    return (
        <div>
            <h2>Popular Posts</h2>        
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

export default HomePage;
