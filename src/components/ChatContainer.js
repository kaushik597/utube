import React, { useEffect,useState } from "react";
import Message from "./Message";
import {
  generateName,
  generateRandomString,
} from "../utils/randomNameAndStringGenerator";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../utils/chatSlice";

const ChatContainer = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage]= useState("");
  const comments = useSelector((store) => store.chat.messages);
    
  useEffect(() => {
    const i = setInterval(() => {
      getLiveMessages();
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const getLiveMessages = async () => {
    const randomName = generateName();
    const randomMessage = generateRandomString(20);
    dispatch(
      addChatMessages({
        name: randomName,
        message: randomMessage,
      })
    );

  };
  return (
    <>
    <div className="ml-2 p-2 border border-black bg-slate-100 w-full h-[450px] rounded-lg flex flex-col-reverse overflow-y-scroll">
      {comments.map((c, i) => (
        <Message key={i} name={c.name} msg={c.message} />
      ))}
    </div>
    <form className="w-full" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addChatMessages({
            name:"sunny",
            message:liveMessage
        }))
        setLiveMessage("")
        
    }}>
        <input className="w-72 p-2 m-2 rounded-lg border border-black" type="text" value={liveMessage}  onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className="bg-red-600 p-2 rounded-lg text-white font-semibold" onClick={()=>{}}>Send</button>
    </form>
    </>
  );
};

export default ChatContainer;
