import React from "react";

import { Divider } from "antd";

import LoginForm from "./components/LoginForm";
//import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  return (
    <Divider className="login-form">
      <LoginForm />
    </Divider>
  );
}

export default App;
