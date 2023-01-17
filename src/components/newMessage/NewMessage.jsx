import { useState, useEffect } from "react";
import { POST } from "../../utils/http";

import "./index.css";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");
  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleUrlText = (e) => setUrlText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: urlText,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  return (
    <div className="NewMessage">
      <form onSubmit={onSubmit}>
        <input
          value={authorText}
          onChange={onHandleAuthorText}
          type="text"
          placeholder="Author..."
          required
        />
        <input
          value={titleText}
          onChange={onHandleTitleText}
          type="text"
          placeholder="Title..."
          required
        />
        <input
          value={messageText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Whats'up?"
          required
        />
        <input
          value={urlText}
          onChange={onHandleUrlText}
          type="text"
          placeholder="Img url..."
          required
        />
        <input className="btn-send" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
