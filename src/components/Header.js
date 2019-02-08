import React, { useContext } from "react";
import MyContext from "../lib/MyContext";

const Header = () => {
  const { isLogIn, token, reducer } = useContext(MyContext);

  const handleLogOut = () => {
    reducer("setLogIn", false);
  };

  return (
    <div>
      {isLogIn ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        "Not Logged In"
      )}
    </div>
  );
};

export default Header;
