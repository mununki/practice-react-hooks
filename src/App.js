import React, { useState } from "react";
import MyContext from "./lib/MyContext";
import Header from "./components/Header";
import LogIn from "./components/LogIn";

const useHookus = () => {
  // set initial values
  const [isLogIn, setLogIn] = useState(false);
  const [token, setToken] = useState("");

  // set reducer
  const reducer = (dispatch, value) => {
    switch (dispatch) {
      case "setLogIn":
        setLogIn(value);
        break;
      case "setToken":
        setToken(value);
        break;
      default:
        break;
    }
  };

  const value = { isLogIn, token, reducer };

  return value;
};

const App = () => {
  const value = useHookus();

  return (
    <MyContext.Provider value={value}>
      <Header />
      <LogIn />
    </MyContext.Provider>
  );
};

export default App;
