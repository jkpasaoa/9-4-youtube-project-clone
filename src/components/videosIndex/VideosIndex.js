import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getAllVids } from "../../api/fetch"
import Video from "./Video"

export default function VideosIndex({ searchInput, searchTitle }) {

    const [videoResults, setVideoResults] = useState([]);

    useEffect(() => {
        getAllVids(searchTitle)
            .then((response) => {
                setVideoResults(response);
                // console.log(videoResults.items);
            })
    }, [searchTitle])

    return (
        <div>
            {
                videoResults.items?.map((video) => {
                    const vidId = video.id.videoId;
                    const vidThumbnail = video.snippet.thumbnails.medium.url;
                    const vidTitle = video.snippet.title;
                    const vidChannel = video.snippet.channelTitle;
                    console.log(video)

                    return (
                        <div key={vidId} className="videos">
                            <Link to={`/videos/${vidId}`}>
                                <img src={vidThumbnail} />
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