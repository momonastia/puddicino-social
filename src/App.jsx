import { useEffect, useState } from "react";
import "./App.css";
import MessageList from "./components/messageList";
import NewMessage from "./components/newMessage";
import FriendList from "./components/friendList";
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";
import MainLayout from "./layouts/MainLayout";
import LogIn from "./components/login";

function App() {
  const [user, setUser] = useState();

  const [filterState, setFilterState] =
    useState(""); /* per passare al figlio Filter tramite prop*/

  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return (
    <div className="App">
      <MainLayout>
        {user ? (
          <div className="main-content">
            <FriendList />
            <div className="mainSection">
              {/* Condizione per renderizzare Modal solo se lo stato isModalEnabled è impostato a true */}
              {isModalEnabled && (
                <Modal setModalEnabled={setModalEnabled}>
                  <NewMessage setModalEnabled={setModalEnabled} />
                </Modal>
              )}
              <Filter setFilterState={setFilterState} />
              <MessageList filterSearch={filterState} />{" "}
              {/* creazione del prop per filtrare i risultati */}
              <Button
                onHandleModal={onHandleModal}
                isModalEnabled={isModalEnabled}
              />
              {/* TODO: Footer */}
            </div>
          </div>
        ) : (
          <LogIn />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
