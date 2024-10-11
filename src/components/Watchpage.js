import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Commentscontainer from "./Commentscontainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, []);

  const getComments = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/comments"
    );
    const data = await response.json();
  };

  return (
    <div className="flex flex-col">
      <div>
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Commentscontainer />
    </div>
  );
};
export default WatchPage;
