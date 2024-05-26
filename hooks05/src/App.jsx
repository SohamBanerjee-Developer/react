import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [char, charAllowed] = useState(false);
  const [number, numberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const createPassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (char) str += "`~!@#$%^&*()=-+_";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, number, char, ]);
  let passwordRef = useRef(null);
  function copyPassword() {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
    
  }
  useEffect(()=>{createPassword()},[length,number,char,createPassword]);
  return (
    <>
      <div className="bg-gray-600 min-h-40 max-w-2xl w-screen rounded-lg p-4 flex flex-col gap-8">
        <div className="w-full flex justify-center items-center flex-row">
          <input
            className="h-12 w-4/5 bg-white rounded-lg pl-4 text-black text-xl"
            type="text"
            placeholder="enter your password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <input
            className="h-12 w-20 cursor-pointer bg-blue-800 rounded-lg text-xl"
            type="submit"
            value="copy"
            onClick={copyPassword}
          />
        </div>
        <div className="flex gap-4 w-full">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label htmlFor="range" className="text-xl text-yellow-400">
            Length:{length}{" "}
          </label>
          <input
            type="checkbox"
            className="w-28 cursor-pointer"
            defaultChecked={number}
            onChange={() => {
              numberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numbers" className="text-xl text-yellow-400">
            numbers{" "}
          </label>
          <input
            type="checkbox"
            className="w-28 cursor-pointer"
            defaultChecked={char}
            onChange={() => {
            charAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charcters" className="text-xl text-yellow-400">
            characters{" "}
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
