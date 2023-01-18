import { useState } from "react";
import "./App.css";
import MessageList from "./components/messageList";
import NewMessage from "./components/newMessage";
import FriendList from "./components/friendList";
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";

function App() {
  const [filterState, setFilterState] =
    useState(""); /* per passare al figlio Filter tramite prop*/

  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled(true);

  return (
    <div className="App">
      <FriendList />
      <div className="mainSection">
        {/* Condizione per renderizzare Modal solo se lo stato isModalEnabled è impostato a true */}
        {isModalEnabled && (
          <Modal>
            <NewMessage />
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />
        <MessageList filterSearch={filterState} />{" "}
        {/* creazione del prop per filtrare i risultati */}
        <Button onHandleModal={onHandleModal} />
      </div>
    </div>
  );
}

export default App;
