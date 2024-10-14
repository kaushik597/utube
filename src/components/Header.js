import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEOS_API,
} from "../utils/constants";
import { cachedSearch } from "../utils/searchSlice";
import { LoadVideos, searchVideoResults } from "../utils/videoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const cacheResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (cacheResult[searchQuery]) {
          setSearchResults(cacheResult[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      },

      200
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" + YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    
    setSearchResults(json[1]);
    dispatch(
      cachedSearch({
        [searchQuery]: json[1],
      })
    );
  };

  const getSearchedVideos = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" +
        YOUTUBE_SEARCH_VIDEOS_API +
        "?part=snippet&q=" +
        searchQuery +
        "&key=" +
        process.env.REACT_APP_API_KEY
    );
    const json = await data.json();
    dispatch(searchVideoResults(json.items));
  };
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={toggleSideBar}
        />
        <a href="/">
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="logo"
            className="h-11 ml-2 cursor-pointer"
          />
        </a>
      </div>
      <div className="col-span-10 pl-12">
        <div>
          <input
            type="text"
            className="border border-gray-400 rounded-l-full w-1/2 p-1 px-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />
          <button
            className="border border-gray-400 p-1 rounded-r-full bg-slate-200"
            onClick={getSearchedVideos}
          >
            🔍
          </button>
        </div>
        {showSearchResults && (
          <div className="absolute bg-white p-1 w-[28rem]  rounded-lg shadow-lg ">
            <ul>
              {searchResults.map((s) => (
                <li key={s} className=" p-1 shadow-sm hover:bg-slate-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
          className="h-6"
        />
      </div>
    </div>
  );
};

export default Header;
