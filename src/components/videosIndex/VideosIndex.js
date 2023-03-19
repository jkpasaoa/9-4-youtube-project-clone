import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllVids } from "../../api/fetch"
import Video from "./Video"
import YouTube from "react-youtube"
import './VideosIndex.css'

export default function VideosIndex({ searchInput, setSearchInput, searchTitle, setSearchTitle, maxResults }) {

  const [videoResults, setVideoResults] = useState([]);
  const navigate = useNavigate();
  
    useEffect(() => {
        getAllVids(searchTitle, maxResults)
            .then((response) => {
                setVideoResults(response);
            })
            .catch((err) => {
                console.log(err);
                navigate('*');
            })
    }, [searchTitle])

    // Options from the react-youtube package
    const opts = {
        height: "180",
        width: "320",
        playerVars: {
            autoplay: 0,
            controls: 1,
            // Adds default YouTube player controls (play, pause, stop, fast forward, rewind)
        },
    };


    return (
        <div className="videos-index">
            {
                videoResults.items?.map((video) => {
                    const vidId = video.id.videoId;
                    // const vidThumbnail = video.snippet.thumbnails.medium.url;
                    const vidTitle = video.snippet.title;
                    const vidChannel = video.snippet.channelTitle;
                    // console.log(video)

                    return (
                        <div key={vidId} className="video-card">
                            <Link
                                to={`/videos/${vidId}`}
                                style={{ color: 'black', textDecoration: 'none' }}>
                                <YouTube videoId={vidId} opts={opts} />
                                {/* add youtube options here, commented out thumbnail */}
                                {/* <img src={vidThumbnail} /> */}
                                <div>{vidTitle}</div>
                                <div>{vidChannel}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}