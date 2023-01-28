import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import Message from "../message";
import React from "react";

const MessageList = ({ filterSearch }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      setMessageList(posts.filter((post) => post.title.includes(filterSearch)))
    );
  }, [filterSearch]);

  console.log(messageList);

  return (
    <div className="MessageList">
      <div>
        {messageList.map((msg) => (
          <Message data={msg} key={msg.id} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
