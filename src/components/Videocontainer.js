import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap px-10">
      {videos.map((video) => (
        <Link to={'/watch?v='+video.id} key={video.id}>
        <Videocard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
