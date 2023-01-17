import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import Message from "../message";

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMessageList(posts));
  }, []);

  console.log(messageList);

  return (
    <div className="MessageList">
      {messageList.map((msg) => (
        <Message data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default MessageList;
