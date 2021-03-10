import React from "react";
import Input from "../components/Input";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Auth() {
  const [{}, dispatch] = useStateValue();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleLogin = (e) => {
    if (username || password) {
      if (username === "Admin") {
        dispatch({
          type: "SET_USER",
          user: {
            name: "Admin",
            permission: "all",
            password: "Admin",
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: {
            name: username,
            permission: "none",
            password: "test",
          },
        });
      }

      history.push("/");
    }
  };
  return (
    <div className="auth">
      <div className="auth__box">
        <h1>Login</h1>
        <form action="#" onSubmit={handleLogin}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            label="Username"
            value={username}
            setValue={setUsername}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            value={password}
            setValue={setPassword}
          />
          <button type="submit" className="btn__submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
