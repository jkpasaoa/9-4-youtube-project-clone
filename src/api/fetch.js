const KEY = process.env.REACT_APP_API_KEY


export async function getAllVids(searchTerm) {
    const response =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=5&key=${KEY}`);
    const data = await response.json();
    return data;
}
