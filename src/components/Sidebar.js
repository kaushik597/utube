import React from "react";
import Menuitems from "./Menuitems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleMenuBar = useSelector((store) => store.app.isMenuOpen);
  if (!toggleMenuBar) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      {/* <Menuitems /> */}
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Live</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
