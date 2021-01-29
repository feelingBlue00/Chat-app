import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Conversation from "./components/room/Conversation";
//import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/conversation" component={Conversation} />
    </Router>
  );
};

export default App;
