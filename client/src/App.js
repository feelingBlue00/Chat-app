import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
//import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  return (
    <div className="login-form">
      <LoginForm />
    </div>
  );
};

export default App;
