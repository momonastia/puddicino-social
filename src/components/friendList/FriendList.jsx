import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import Friend from "../friend";

const FriendList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => setFriendsList(users));
  }, []);

  console.log(friendsList);

  return (
    <div className="friend-list">
      <div className="friend-list-header">
        <h3>Your friends online</h3>
      </div>
      <div className="friend-list-content">
        {friendsList.map((friend) => (
          <Friend data={friend} key={friend.id} />
        ))}
        <Friend data={{ image: "", firstName: "", lastName: "" }} />
      </div>
    </div>
  );
};

export default FriendList;
