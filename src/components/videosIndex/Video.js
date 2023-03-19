import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import "./Video.css"

export default function Video({ allVid }) {
  const { id } = useParams();
  // console.log(allVid);

  const singleVid = allVid.filter(vid => vid.id.videoId === id)
  console.log(singleVid);


  const opts = {
    height: '500px',
    width: '80%',
    playerVars: {
      autoplay: 1,
      playsinline: 1
    }
  };

  function playVideo(event) {
    event.target.playVideo();
  };

  return (
    <div className="singleVid">
      <Youtube videoId={id} opts={opts} onReady={playVideo} />
      <div className="vidDescrip">
        <h1>{singleVid[0].snippet.title}</h1>
        <p>{singleVid[0].snippet.description}</p>
      </div>
    </div>
  );
};
