import { useState, useEffect } from "react";
import GET from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Message">
      <div className="post_content">
        <div className="message_textContent">
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
        <div className="message_header">
          <img src={user.image} alt={user.firstName} />
          <p>@{user.firstName}</p>
        </div>
      </div>
      <div className="message_footer">
        <p>#{data.tags.join(" #")}</p>
        <p>❤️{data.reactions}</p>
      </div>
    </div>
  );
};

export default Message;
