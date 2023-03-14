import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import Youtube from "react-youtube";
//import { KEY } from "../../api/fetch";

const Video = () => {
    // const { videoID } = useParams();
    const navigate = useNavigate();
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${""}&key=${""}&part=snippet`)
        .then(response => response.json())
        .then(data => setVideoData(data.items[0]))
        .catch(error => console.log(error));
    }, []);

    if(!videoData) {
        return <div>Loading...</div>;
    }

    const opts = {
        height: '390',
        width: '640',
      };

    return(
        <div>
            <Youtube videoId={""} opts={opts} />
            <h1>{videoData.snippet.title}</h1>
      <p>{videoData.snippet.description}</p>
      <Link to="/">Go back to home page</Link>
      <button onClick={() => navigate('/')}>Go back to home page</button>
    </div>
  );
};

export default Video;
