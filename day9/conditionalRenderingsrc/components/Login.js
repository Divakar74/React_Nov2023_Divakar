import React, { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>

      <ConditionalComponent isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Login;