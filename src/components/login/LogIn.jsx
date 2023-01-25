import { useState } from "react";
import users from "../../utils/usersAccess.js";
import "./index.css";

const LogIn = () => {
  const [loginState, setLoginState] = useState({});

  const onFormSubmit = () =>
    localStorage.setItem("username", JSON.stringify(loginState));

  return (
    <div className="LogIn">
      <h3>Login</h3>
      <div className="wrapper">
        <form onSubmit={onFormSubmit} action="/">
          <input
            type="text"
            value={loginState.username}
            onChange={(e) =>
              setLoginState((prev) => ({ ...prev, username: e.target.value }))
            }
            placeholder="Username"
          />
          <input
            type="password"
            value={loginState.password}
            onChange={(e) =>
              setLoginState((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Password"
          />
          <input className="btn-send" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
