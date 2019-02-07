import React, { useContext } from "react";
import useHandleInput from "../utils/useHandleInput";
import MyContext from "../lib/MyContext";

const LogIn = () => {
  const { isLogIn, setLogIn } = useContext(MyContext);
  const [email, setEmail] = useHandleInput("");
  const [password, setPassword] = useHandleInput("");

  const handleLogin = () => {
    setLogIn(true);
  };

  return (
    <div>
      {isLogIn ? (
        <div>You're Logged In</div>
      ) : (
        <>
          <div>{email}</div>
          <div>{password}</div>
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
        </>
      )}
    </div>
  );
};

export default LogIn;
