export const popularReddit = async () => {
    const requestUrl = `https://www.reddit.com/r/popular.json`

    const response = await fetch(requestUrl, {
        method: 'GET'
    });

    const json = await response.json();

    return json;
}

export const searchReddit = async (topic) => {
    //const searchParams = new URLSearchParams({query});

    const requestUrl = `https://www.reddit.com/search.json?q=${topic}`;

    const response = await fetch(requestUrl, {
        method: 'GET'
    });

    const json = await response.json();

    return json;
}