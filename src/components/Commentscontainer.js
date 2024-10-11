import React from "react";
// import Comment from './Comment'
import Commentslist from "./Commentslist";
const commentsData = [
  {
    name: "Kaushik Yadav",
    text: "crazy bayya masth chesnav",
    replies: [],
  },
  {
    name: "Kaushik Yadav",
    text: "crazy bayya masth chesnav",
    replies: [
      {
        name: "Kaushik Yadav",
        text: "crazy bayya masth chesnav",
        replies: [],
      },
      {
        name: "Kaushik Yadav",
        text: "crazy bayya masth chesnav",
        replies: [],
      },
      {
        name: "Kaushik Yadav",
        text: "crazy bayya masth chesnav",
        replies: [],
      },
      {
        name: "Kaushik Yadav",
        text: "crazy bayya masth chesnav",
        replies: [],
      },
    ],
  },
  {
    name: "Kaushik Yadav",
    text: "crazy bayya masth chesnav",
    replies: [
      {
        name: "Kaushik Yadav",
        text: "crazy bayya masth chesnav",
        replies: [
          {
            name: "Kaushik Yadav",
            text: "crazy bayya masth chesnav",
            replies: [
              {
                name: "Kaushik Yadav",
                text: "crazy bayya masth chesnav",
                replies: [
                  {
                    name: "Kaushik Yadav",
                    text: "crazy bayya masth chesnav",
                    replies: [
                      {
                        name: "Kaushik Yadav",
                        text: "crazy bayya masth chesnav",
                        replies: [],
                      },
                      {
                        name: "Kaushik Yadav",
                        text: "crazy bayya masth chesnav",
                        replies: [],
                      },
                      {
                        name: "Kaushik Yadav",
                        text: "crazy bayya masth chesnav",
                        replies: [],
                      },
                      {
                        name: "Kaushik Yadav",
                        text: "crazy bayya masth chesnav",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kaushik Yadav",
    text: "crazy bayya masth chesnav",
    replies: [],
  },
];
const Commentscontainer = () => {
  return (
    <div className=" m-3 p-2">
      <h1 className="font-bold">Comments:</h1>
      <div>
        <Commentslist data={commentsData} />
      </div>
    </div>
  );
};

export default Commentscontainer;
