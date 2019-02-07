import React, { useState } from "react";
import MyContext from "./lib/MyContext";
import Header from "./components/Header";
import LogIn from "./components/LogIn";

const App = () => {
  const [isLogIn, setLogIn] = useState(false);

  const initValue = { isLogIn, setLogIn };

  return (
    <MyContext.Provider value={initValue}>
      <Header />
      <LogIn />
    </MyContext.Provider>
  );
};

export default App;
