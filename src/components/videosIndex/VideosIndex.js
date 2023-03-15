import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getAllVids } from "../../api/fetch"
import Video from "./Video"

export default function VideosIndex({ searchInput, searchTitle }) {

    const [videoResults, setVideoResults] = useState([]);

    useEffect(() => {
        getAllVids(searchInput)
        .then((response) => {
            setVideoResults(response)
            console.log(videoResults)
        })
    }, [searchTitle])

    // return(
    //     <div>
    //        {
    //         videoResults.items.map((video) => {
    //             <div key={}>
    //         })
    //        }
    //     </div>
    // )
}