import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import ChatWindow from "./components/ChatWindow";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [id, setId] = useLocalStorage("id");
  const [id, setId] = useState();
  const chatWindow = <ChatWindow userId={id} />;

  return id ? <div>Hello {id}</div> : <LoginForm onIdSubmit={setId} />;
}

export default App;
