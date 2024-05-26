import React from "react";
import UserContext from "../context/context";
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {setUser} = React.useContext(UserContext);
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username, password})// here user works as an object
  }
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter your user name"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter your password"
      />
      <button onClick={handleSubmit}> submit</button>
    </>
  );
}
