import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Youtube from "react-youtube";

export default function Video() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const opts = {
    height: '500px',
    width: '95%',
    playerVars: {
      autoplay: 1,
      playsinline: 1
    }
  };

  function pauseVideo(event){
    event.target.pauseVideo();
    // const onPlayerReady: YouTubeProps['onReady'] = (event) => {}
  }

  return (
    <div>
      <Youtube videoId={id} opts={opts} onReady={pauseVideo} />
      {/* <h1>{videoData.snippet.title}</h1>
      <p>{videoData.snippet.description}</p>
      <Link to="/">Go back to home page</Link>
      <button onClick={() => navigate('/')}>Go back to home page</button> */}
    </div>
  );
};

