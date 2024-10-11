import React from "react";
import Comment from "./Comment";

const Commentslist = (comments) => {
  return comments.data.map((comment, index) => (
    <div>
      <div>
        <Comment data={comment} />
      </div>
      <div className="ml-5 pl-2 border border-l-black">
        <Commentslist data={comment.replies} />
      </div>
    </div>
  ));
};

export default Commentslist;
