import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllVids } from "../../api/fetch"
import YouTube from "react-youtube"
import './VideosIndex.css'

export default function VideosIndex({ searchTitle, maxResults, setAllVid }) {

    const [videoResults, setVideoResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllVids(searchTitle, maxResults)
            .then((response) => {
                setVideoResults(response);
                setAllVid(response.items);
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

    function fixBrokenTitle(title) {
        const ex = { "&amp;": "&", "&quot;": '"', "&#39;": "'" };
        return title.replace(/(&amp;|&quot;|&#39;)/g, found => ex[found]);
    }

    function pauseVideo(event) {
        event.target.pauseVideo();
      };

    return (
        <div className="videos-index">
            {
                videoResults.items?.map((video) => {
                    // console.log(video)
                    const vidId = video.id.videoId;
                    const vidTitle = fixBrokenTitle(video.snippet.title);
                    const vidChannel = video.snippet.channelTitle;
                    // May change back to <YouTube>
                    // const vidThumbnail = video.snippet.thumbnails.medium.url;

                    return (
                        <div key={vidId} className="video-card" >
                            <YouTube videoId={vidId} opts={opts} onReady={pauseVideo} />
                            <Link
                                to={`/videos/${vidId}`}
                                style={{ color: 'black', textDecoration: 'none' }}>
                                {/* add youtube options here, commented out thumbnail */}
                                {/* <img src={vidThumbnail} alt={vidId} /> */}
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