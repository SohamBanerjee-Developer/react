import Button from "./Button";
import "./App.css";
import { useState } from "react";
function App() {
  const [color, setCOLOUR] = useState("black");
  return (
    <div className="w-full h-screen main" style={{ backgroundColor: color }}>
      <div className="flex fixed bottom-12 inset-x-0 flex-wrap justify-center ">
        <div className="px-3 py-2 rounded-lg gap-6 flex justify-center bg-slate-50">
          <Button color="red" onSmash={() => setCOLOUR("red")}/>
          <Button color="green" onSmash={()=> setCOLOUR("green")} />
          <Button color="blue" onSmash={()=> setCOLOUR("blue")} />
          <Button color="pink" onSmash={()=>{setCOLOUR("pink")}}/>
          <Button color="grey" onSmash={()=>{setCOLOUR("grey")}}/>
          <Button color="orange" onSmash={()=>{setCOLOUR("orange")}}/>

        </div>
      </div>
    </div>
  );
}

export default App;
