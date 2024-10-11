import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoadVideos, searchVideoResults } from "../utils/videoSlice";
import { useSelector } from "react-redux";
const Videocontainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();

    dispatch(LoadVideos(data.items));
  };

  const videos = useSelector((store) => store.video.initialVideos);
  const searchedVideos = useSelector((store) => store.video.searchResults);

  return (
    <div className="flex flex-wrap px-10">
      {searchedVideos[0] ? (
        searchedVideos.map((video) => (
          <Link to={"/watch?v=" + video?.id.videoId} key={video?.id?.videoId}>
            <Videocard key={video?.id?.videoId} info={video} />
          </Link>
        ))
      ) : videos[0] ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <Videocard key={video?.id} info={video} />
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Videocontainer;
