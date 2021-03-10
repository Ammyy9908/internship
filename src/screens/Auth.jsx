import React from "react";
import Input from "../components/Input";
import { useStateValue } from "../StateProvider";

function Auth() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      if (username === "Admin") {
        if (password === "Admin") {
          dispatch({
            type: "SET_USER",
            user: {
              name: "Admin",
              permission: "all",
              password: "Admin",
            },
          });
        } else {
          alert("Make sure Admin Credidentials are correct");
        }
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
    }
  };
  return (
    <div className="auth">
      <div className="auth__box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
