import React, { useContext } from "react";
import MyContext from "../lib/MyContext";
import "../static/global.css";

const Header = () => {
  const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);

  const handleLogOut = () => {
    reducer("setLogIn", false);
  };

  return (
    <div className="header-container">
      <span>Hoodux</span>
      <span>{state.token}</span>
      {isLogIn ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        "Not Logged In"
      )}
    </div>
  );
};

export default Header;
