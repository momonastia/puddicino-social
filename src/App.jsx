import "./App.css";
import MessageList from "./components/messageList";
import NewMessage from "./components/newMessage";
import FriendList from "./components/friendList";

function App() {
  return (
    <div className="App">
      <FriendList />
      <div className="mainSection">
        <NewMessage />
        <MessageList />
      </div>
    </div>
  );
}

export default App;
