import React from "react";
import {useState} from "react";
document.body.style.backgroundColor = "royalblue"

export default function () {
    const [userInput, setUserInput] = useState("");

    function change(event) {
        setUserInput(event.target.value);
    }

    function reset() {
        setUserInput("");
    }

    const num = userInput.length;


    

    return (
        <div style={{backgroundColor: "royalblue",
        color: "white",
            margin: "0 auto",
        width: "500px"}}>

        <input type="text" value={userInput} onChange={change} />
        <p>Character inputs ({userInput})</p>
        <p>Number of characters input ({num})</p>
        <button onClick={reset}>Reset</button>
        </div>
    )
}