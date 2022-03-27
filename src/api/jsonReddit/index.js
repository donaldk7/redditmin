export const getReddit = async (query='popular') => {
    const searchParams = new URLSearchParams({query});
    const requestUrl = `https://www.reddit.com/r/popular.json`

    const response = await fetch(requestUrl, {
        method: 'GET'
    });

    const json = await response.json();

    return json;
}