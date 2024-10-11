import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg p-3 my-2 bg-gray-100">
      <img
        className="w-6 h-6 m-2"
        alt="user profile"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
      ></img>
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
