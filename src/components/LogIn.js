import React, { useContext } from "react";
import MyContext from "../lib/MyContext";
import useHandleInput from "../utils/useHandleInput";
import "../static/global.css";

const LogIn = () => {
  const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);
  const [email, setEmail] = useHandleInput("");
  const [password, setPassword] = useHandleInput("");

  const handleLogin = () => {
    reducer("setLogIn", true);
  };

  const handleTokenUseReducer = () => {
    dispatch({ type: "setToken", payload: "ReactHooksAwesome!" });
  };

  return (
    <div className="login-container">
      {isLogIn ? (
        <div>You are Logged In</div>
      ) : (
        <>
          <div className="typed-value-container">
            <div>{email}</div>
            <div>{password}</div>
            <div>{state.token}</div>
          </div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleTokenUseReducer}>Set the token</button>
        </>
      )}
    </div>
  );
};

export default LogIn;
