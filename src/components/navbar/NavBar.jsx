import { useState, useEffect } from "react";
import Logo from "../logo";
import {
  TiHomeOutline,
  TiUserOutline,
  TiCompass,
  TiPlusOutline,
} from "react-icons/ti";
import "./index.css";

const NavBar = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("username")));
  }, []);

  const onlogOut = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="NavBar">
      <Logo />
      <ul>
        <li onClick={onlogOut} className="username">
          {username ? (
            <div className="loginInfo">
              <img src={username.imgProfile} alt="user-img" />
            </div>
          ) : (
            "Logged out"
          )}{" "}
        </li>
        <li>
          <a href="#">
            <TiHomeOutline className="icon" />
            <div className="menu-item">Home</div>
          </a>
        </li>
        <li>
          <a href="#">
            <TiUserOutline />
            <div className="menu-item">Profile</div>
          </a>
        </li>
        <li>
          <a href="#">
            <TiCompass />
            <div className="menu-item">Esplore</div>
          </a>
        </li>
        <li>
          <a href="#">
            <TiPlusOutline />
            <div className="menu-item">Create</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
