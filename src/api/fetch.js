
const BASE_URL = process.env.REACT_APP_BASE_URL
const KEY = process.env.REACT_APP_API_KEY

export async function getAllVids(searchTerm, results) {
    const response = await fetch(`${BASE_URL}?q=${searchTerm}&part=snippet&maxResults=${results}&key=${KEY}`);
    const data = await response.json();
    return data;
};

//uncomment out this previous function of fetch to see if videos work
// export async function getAllVids(searchTerm) {
//     const response =  await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=5&key=${KEY}`);
//     const data = await response.json();
//     return data;
// }