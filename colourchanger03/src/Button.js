// import { useState } from "react";

export default function Button({color, onSmash}) {
   
    
    // const [COLOR, setCOLOUR] = useState("black")
    // document.body.style.backgroundColor= COLOR;
    // console.log(COLOR)
    return(
        <button onClick={onSmash} className="px-2 py-1 rounded-lg"
        style={{backgroundColor: color}}>{color}</button>
    );
}