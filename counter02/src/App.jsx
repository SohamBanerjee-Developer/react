import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addvalue = () => {
    console.log("clicked ", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h2>implementation of hooks</h2>
      <p>using counter : {counter}</p>
      <button onClick={addvalue}>{counter}</button>
      <p><button onClick={removeValue}>{counter}</button></p>
    </>
  );
}

export default App;
