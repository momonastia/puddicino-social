import { useState, useEffect } from "react";
import { POST } from "../../utils/http";

import "./index.css";

const NewMessage = ({ setModalEnabled }) => {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
    setModalEnabled(false);
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  return (
    <div className="NewMessage">
      <h2>What's up?...</h2>
      <form onSubmit={onSubmit}>
        <input
          value={authorText}
          onChange={onHandleAuthorText}
          type="text"
          placeholder="Your name here"
          required
        />
        <input
          value={titleText}
          onChange={onHandleTitleText}
          type="text"
          placeholder="Your title here"
          required
        />
        <input
          className="new-message-area"
          value={messageText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Your message here"
          required
        />
        <div className="modal-footer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQBJREFUSEvdldEVATEQRe9WQAfogAooQQeoABVQgg5QgRZ0gArQARVwnpOcE7Gyid39Mb87eTfzZjKbUXNkNevzX4ABsAOaJW27ABNgLx3XohvQKClujwvS8QGPisStzOvybgUuYA5sgBmw+BEcBFhwGzjXAdDNt8AUWNYBCGnejXWrgqEIWhQCaATVn6EZ62+50QBZpRgZ28aOoqqQjXkRBTgBXfP4JKbe6L24oQfVzyEUAuS1psgX9LX08o9Ay/tQCOiZgzFDpCoPKQDbyBhxm6PerJ0DhRWkiEc1ucpldzX9e9tFWteab79ZqZVIXHZ9rOtUoaj8//plRpWcmvQE+A4tGYl7wTAAAAAASUVORK5CYII="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaRJREFUSEu1ldstRVEQhr/z4F0HqAAVUAIV8CYuCSoQFSDBKypAB1SADuhAARLyJWtOZi/7dh7OJPthrzX7/+ef254wZ5vMGZ8xBLvABrBWHmN6L88T8NwXZB/BFnABLA+o/AROAcn+WRfBJXBcvL8A319K1B6rZhM4AZaKnz4SNayNIIP7ge99JolKtatCOvWvCUzLY7ldTxEP9YKK3orTdk5XTWA+lTwm8po0lIixEpeZwG65A8z5UGG7FEWAUxWZ4B7YqaK/AQ6AW+CwQvVsH9DnqNyFigfAgBtzYG+vAjn3vwm0Tmfc/QALxS9qIZY4DYL4IAP1KbgG9oq6aGkxGzgZrI1gqHva7jsJ2lI0K0Gk6CPWylCRF4Ez4Bz4rtja7nqLHEOW+9j14KJTnR+/FpK8pzxzbWi9bZodYtCMUhK7q81MheCqi+gbczR2VdjTAgSRwO4oZ0cbvSp0zstOUBdYn8207AIok5hX3821tYiIrY3gsVb+bdJ60OooLaTAse+7VJhziWb64WQwiXzMc66BagRtBQ6AMf/kWYet4T93gj9XtGgZmEVoLAAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXpJREFUSEvFle0xREEQRc9GQAaIABEgAyJABIgEESACMkAEZIAMiIA6qkfNzs7H2x9b5s/Uzuu+t/v2x85Y8ZmtGJ8pBJvAGbAP7ERAr8ATcA2894IcEVwFeA9Dm4uWQY/AKLfD8Q4QyDePmZwDx1lGuzWSFkGK/CukScAlhkRKtRZySTp3agRq/hZWRpWDf8d77ifJS7xvlTWpEaToLWAZUY1A7NuQa8GnRpC0L6MXqEWQstB3rhY1ghIk/R41SpX8Xwjsir1IteyelkQO4SPwHF33l20tg1Qwh8eC56dFYDNcAs7LSe5QIzgE7qPdbLspBK6LDeAIeBgR+D05nEYL9laFEd8AH4AzNBw0DVIWn4BZeNfOegyl90L0OvR2USq290GDIM3MQnGTfY/AqJTKPWPhlSs/qRncV0pTzXK0rvNllpPk4LZoaxlO+sMpSczMGo027W+2owySJDmJb5PAlyHQVhKl8diaTVmmzEGv75f6NlWipUBz4x/2dVQZ/ApGpwAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWRJREFUSEvFlUEuBVEQRc8fMmEJrAAxljAxxQqwAjZgZAOsADtgakJiLFgBS2DCkBypkv7tdf/fkRc16U6/qrq37quqHlHZRpXzMxTgMwhNHTe1YySuArAM7ALrgO/aI3ALXMR7p9J9FcwDZ8D2hHu6BPaB15JfF4DJnwGfmkxPGmyt5DAq89zkiyWQLgBZbQFvIY2SlEwgpZoDjNlpO5UADHoIx5VgvQocAZvx/Ro4Bu7jXtr+PzglAKU4AE5DBpPfATMtdh/AWoCch1wZ0wugHEtAsk+5ShJdRRNk1cYaVwTIHs/DrO69wD59rGK2NSNj8U2JqgMk8l8kemoM43e+f7nk6m1qZdk5TuhGz76RzE1MfHbUWLf1rYqXmFAD7HN7PCfaxM7KXmRz4heGrArj3EMmdmX0mcwFGrTsmgllawLXtQOo2S3uIAl07anOLupjW+WH0wSsDjDhOn4fD/0nDwb4AjZNWBkumnGMAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <input
          /*  onClick={onHandleModal} */
          className="btn-send"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default NewMessage;
