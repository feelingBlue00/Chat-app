import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/room/Dashboard";
// import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [id, setId] = useLocalStorage("id");
  const [id, setId] = useState();
  const dashboard = <Dashboard userId={id} />;

  return id ? dashboard : <LoginForm onIdSubmit={setId} />;
}

export default App;
