import React, { useState, useReducer } from "react";
import MyContext from "./lib/MyContext";
import Header from "./components/Header";
import LogIn from "./components/LogIn";

const initValue = {
  isLogin: false,
  token: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLogin":
      return { isLogin: action.payload };
    case "setToken":
      return { token: action.payload };
    default:
      throw new Error("wrong action.type");
  }
};

const useHoodux = () => {
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

  return { isLogIn, token, reducer };
};

const App = () => {
  const value = useHoodux();
  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <MyContext.Provider value={{ ...value, state, dispatch }}>
      <Header />
      <LogIn />
    </MyContext.Provider>
  );
};

export default App;
